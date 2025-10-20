import * as vscode from "vscode";

export const ComponentProvider = (
  document: vscode.TextDocument,
  position: vscode.Position
): vscode.CompletionItem[] => {
  const completions: vscode.CompletionItem[] = [];
  const text = document.getText();

  // 判断是否在 static template = `...` 内
  const templateStart = text.indexOf("static template");
  if (templateStart === -1) return [];

  const templateStartIndex = text.indexOf("`", templateStart);
  const templateEndIndex = text.indexOf("`", templateStartIndex + 1);
  const offset = document.offsetAt(position);
  if (offset < templateStartIndex || offset > templateEndIndex) return [];

  // 获取当前输入的最后一个字符
  const range = new vscode.Range(position.translate(0, -1), position);
  const lastChar = document.getText(range);

  // 仅当输入是 字母/数字/- 时触发
  if (!/[\w-]/.test(lastChar)) {
    return [];
  }

  // 从 static components 中提取组件名
  const componentRegex = /static\s+components\s*=\s*([^\n;]+)/;
  const match = text.match(componentRegex);
  if (!match) return [];

  let componentText = match[1];
  const nameRegex = /['"`]([\w-]+)['"`]\s*:/g;
  const compDef = componentText.trim();
  let nameMatch;

  if (compDef.startsWith("{")) {
    // static components = { ... }
    const objMatch = text.match(/static\s+components\s*=\s*\{([\s\S]*?)\}/);
    componentText = objMatch ? objMatch[1] : "";
  } else {
    // static components = components 等
    const varName = compDef.replace(/;$/, "").trim();
    const varRegex = new RegExp(
      `\\b(const|let|var)\\s+${varName}\\s*=\\s*\\{([\\s\\S]*?)\\}`,
      "m"
    );
    const varMatch = text.match(varRegex);
    if (varMatch) {
      componentText = varMatch[2];
    }
  }
  if (!componentText) return [];

  while ((nameMatch = nameRegex.exec(componentText))) {
    const componentName = nameMatch[1];

    const item = new vscode.CompletionItem(
      componentName,
      vscode.CompletionItemKind.Class
    );
    item.insertText = new vscode.SnippetString(
      `<${componentName}>$0</${componentName}>`
    );
    item.detail = "San 自定义组件";
    item.documentation = `插入组件 <${componentName}></${componentName}>`;

    // 优化排序：输入以组件名开头的放前面
    item.sortText = "a_" + componentName;

    completions.push(item);
  }

  return completions;
};
