import * as vscode from "vscode";
import { htmlTags, globalAttributes, events, directives } from "../tag/const";

/**
 * 获取光标所在标签名（支持多行标签）
 */
function getCurrentTagName(
  document: vscode.TextDocument,
  position: vscode.Position
): string | null {
  for (let lineNum = position.line; lineNum >= 0; lineNum--) {
    const lineText = document.lineAt(lineNum).text;
    const match = lineText.match(/<(\w[\w-]*)/);
    if (match) return match[1].toLowerCase();
  }
  return null;
}

/**
 * 判断光标是否在 HTML 标签内
 */
function isInsideTag(
  document: vscode.TextDocument,
  position: vscode.Position
): boolean {
  const text = document.getText(
    new vscode.Range(new vscode.Position(0, 0), position)
  );
  const lastOpen = text.lastIndexOf("<");
  const lastClose = text.lastIndexOf(">");
  // 不在标签内
  if (lastOpen <= lastClose) return false;

  // 检查是不是闭合标签
  const afterOpen = text.slice(lastOpen);
  if (afterOpen.startsWith("</")) return false; // 在闭合标签里，不提示

  return true;
}

/**
 * 判断光标是否在属性值引号内
 */
function isInsideAttributeValue(
  document: vscode.TextDocument,
  position: vscode.Position
): boolean {
  const text = document.getText(
    new vscode.Range(new vscode.Position(0, 0), position)
  );

  // 找到最后一个等号与引号
  const lastEqualQuote = text.lastIndexOf('="');
  if (lastEqualQuote === -1) return false;

  // 从 lastEqualQuote 开始往后找是否有未闭合的引号
  const afterPart = text.slice(lastEqualQuote + 2); // 跳过 ="
  const nextQuote = afterPart.indexOf('"');

  // 若没有后续引号 => 在属性值内
  return nextQuote === -1;
}

/**
 * 提供 HTML 属性、事件、指令补全
 */
export const PropProvider = (
  document: vscode.TextDocument,
  position: vscode.Position
): vscode.CompletionItem[] => {
  const completions: vscode.CompletionItem[] = [];

  // 🚫 不在标签内则不提示
  if (!isInsideTag(document, position)) return completions;

  // 🚫 在属性值引号内不提示
  if (isInsideAttributeValue(document, position)) return completions;

  const line = document.lineAt(position).text.substring(0, position.character);
  const tagName = getCurrentTagName(document, position);
  if (!tagName) return completions;

  let attrs: string[] = [];
  if ((htmlTags as any)[tagName]) {
    attrs = (htmlTags as any)[tagName].attributes || [];
  }

  const allAttrs = new Set([...attrs, ...globalAttributes, ...events]);

  // 当前输入的属性前缀
  const attrMatch = line.match(/(\w[\w-]*)$/);
  const currentInput = attrMatch ? attrMatch[1] : "";

  // 去掉已存在的属性
  const textBefore = document.getText(
    new vscode.Range(new vscode.Position(0, 0), position)
  );
  const tagSectionMatch = textBefore.match(new RegExp(`<${tagName}[^>]*$`));
  const existingAttrs = new Set<string>();
  if (tagSectionMatch) {
    const attrRegex = /\s+(\w[\w-]*)=/g;
    let m;
    while ((m = attrRegex.exec(tagSectionMatch[0]))) {
      existingAttrs.add(m[1]);
    }
  }

  const availableAttrs = [...allAttrs].filter((a) => !existingAttrs.has(a));

  // 属性/事件补全
  availableAttrs.forEach((attr) => {
    const itemKind = attr.startsWith("on-")
      ? vscode.CompletionItemKind.Event
      : vscode.CompletionItemKind.Property;

    const item = new vscode.CompletionItem(attr, itemKind);
    item.insertText = new vscode.SnippetString(`${attr}="$1"$0`);

    if (attrMatch) {
      item.range = new vscode.Range(
        position.line,
        position.character - currentInput.length,
        position.line,
        position.character
      );
    }

    item.detail = `HTML 属性 (${tagName})`;
    item.documentation = new vscode.MarkdownString(
      `在 **<${tagName}>** 标签中使用 **${attr}**`
    );

    completions.push(item);
  });

  // 指令补全
  directives.forEach((dir) => {
    const item = new vscode.CompletionItem(
      dir,
      vscode.CompletionItemKind.Keyword
    );
    item.insertText = new vscode.SnippetString(`${dir}="$1"$0`);

    if (attrMatch) {
      item.range = new vscode.Range(
        position.line,
        position.character - currentInput.length,
        position.line,
        position.character
      );
    }

    item.detail = `自定义指令 (${tagName})`;
    item.documentation = new vscode.MarkdownString(
      `你可以为 **<${tagName}>** 添加指令 **${dir}**`
    );

    completions.push(item);
  });

  return completions;
};
