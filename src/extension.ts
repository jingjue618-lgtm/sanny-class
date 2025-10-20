import * as vscode from "vscode";
import { SanClassProvider } from "./providers/SanClassProvider";
import { PropProvider } from "./providers/PropProvider";
import { ComponentProvider } from "./providers/ComponentProvider";

const FILES = ["javascript", "typescript"];

export function activate(context: vscode.ExtensionContext) {
	const sanClassProvider = new SanClassProvider(context.extensionPath);

	const sanClassDisposable = vscode.languages.registerCompletionItemProvider(
		FILES,
		sanClassProvider,
		""
	);

	const htmlCompletionItems = vscode.languages.registerCompletionItemProvider(
		FILES,
		{
			provideCompletionItems: PropProvider,
		},
		"",
	);


	const componentItems = vscode.languages.registerCompletionItemProvider(
		FILES,
		{
			provideCompletionItems(document, position) {
				return ComponentProvider(document, position);
			},
		},
	);


	context.subscriptions.push(sanClassDisposable);

	context.subscriptions.push(htmlCompletionItems);

	context.subscriptions.push(componentItems);
}

// This method is called when your extension is deactivated
export function deactivate() { }
