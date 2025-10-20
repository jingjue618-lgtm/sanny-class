import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export class SanClassProvider implements vscode.CompletionItemProvider {
  private template: string | null = null;
  private templatePath: string;

  constructor(extensionPath: string) {
    this.templatePath = path.join(extensionPath, 'src', 'template', 'sanClass.tpl');
  }

  /** 读取模板文件 */
  private loadTemplate(): string {
    if (!this.template) {
      try {
        this.template = fs.readFileSync(this.templatePath, 'utf-8');
      } catch (err) {
        console.error('模板加载失败:', err);
        this.template = '/* 模板加载失败 */';
      }
    }
    return this.template;
  }

  /** 判断光标是否在代码块内（例如函数、对象或类的大括号中） */
  private isInsideCodeBlock(document: vscode.TextDocument, position: vscode.Position): boolean {
    const textBeforeCursor = document.getText(new vscode.Range(new vscode.Position(0, 0), position));

    // 统计光标前的花括号数量差
    const openBraces = (textBeforeCursor.match(/{/g) || []).length;
    const closeBraces = (textBeforeCursor.match(/}/g) || []).length;

    // 如果左括号多于右括号，说明在代码块内
    return openBraces > closeBraces;
  }

  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.CompletionItem[] | undefined {
    // 如果在代码块内，则不提供提示
    if (this.isInsideCodeBlock(document, position)) {
      return ;
    }

    // 否则提供 sanclass 模板提示
    const template = this.loadTemplate();
    const item = new vscode.CompletionItem('sanclass', vscode.CompletionItemKind.Snippet);
    item.insertText = new vscode.SnippetString(template);
    item.detail = 'San 类模板';
    item.documentation = new vscode.MarkdownString('输入 `sanclass` 生成一个 San 类模板');
    return [item];
  }
}
