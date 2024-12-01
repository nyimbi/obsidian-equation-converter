import { App, Editor, MarkdownView, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class EquationConverterPlugin extends Plugin {
    async onload() {
        // Add ribbon icon
        const ribbonIconEl = this.addRibbonIcon(
            'calculator', 
            'Convert Equations', 
            async (evt: MouseEvent) => {
                const activeView = this.app.workspace.getActiveViewOfType(MarkdownView);
                if (activeView) {
                    const editor = activeView.editor;
                    const content = editor.getValue();
                    const convertedContent = this.convertEquations(content);
                    editor.setValue(convertedContent);
                }
            }
        );

        // Add command to command palette
        this.addCommand({
            id: 'convert-equations',
            name: 'Convert Equations in Current File',
            editorCallback: (editor: Editor) => {
                const content = editor.getValue();
                const convertedContent = this.convertEquations(content);
                editor.setValue(convertedContent);
            }
        });
    }

    convertEquations(text: string): string {
        if (typeof text !== 'string') {
            return text;
        }

        // Handle escaped delimiters
        text = text.replace(/\\\\\\\[/g, 'ESCAPED_OPEN_BRACKET')
                  .replace(/\\\\\\\]/g, 'ESCAPED_CLOSE_BRACKET')
                  .replace(/\\\\\\\(/g, 'ESCAPED_OPEN_PAREN')
                  .replace(/\\\\\\\)/g, 'ESCAPED_CLOSE_PAREN');

        // Convert multiline equations
        text = text.replace(/(?<!\\)\\\[([\s\S]*?)\\\]/g, (_, content) => {
            content = content.trim();
            return `\n$$\n${content}\n$$\n`;
        });

        // Convert inline equations
        text = text.replace(/(?<!\\)\\\((.*?)\\\)/g, (_, content) => {
            content = content.trim();
            return `$${content}$`;
        });

        // Restore escaped delimiters
        text = text.replace(/ESCAPED_OPEN_BRACKET/g, '\\[')
                  .replace(/ESCAPED_CLOSE_BRACKET/g, '\\]')
                  .replace(/ESCAPED_OPEN_PAREN/g, '\\(')
                  .replace(/ESCAPED_CLOSE_PAREN/g, '\\)');

        // Clean up multiple newlines
        text = text.replace(/\n{3,}/g, '\n\n');

        return text;
    }

    onunload() {
        // Cleanup when the plugin is disabled
    }
}

