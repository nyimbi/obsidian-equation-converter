# Obsidian Equation Converter

A simple plugin for Obsidian that converts OpenAI-style equation markup to standard markdown equation syntax. This plugin helps users who copy mathematics from OpenAI interfaces (like ChatGPT) into Obsidian by automatically converting the equation formatting.

## Features

- Converts inline equations from `\(equation\)` to `$equation$`
- Converts display equations from `\[equation\]` to proper multiline format:
  ```
  $$
  equation
  $$
  ```
- Preserves proper spacing (no spaces between $ and equations for inline math)
- Handles escaped delimiters correctly
- Available through both ribbon icon and command palette
- Works on the currently active file
- Preserves all other content in the document

## Installation

### From Obsidian Community Plugins

1. Open Obsidian Settings
2. Navigate to Community Plugins
3. Search for "Equation Converter"
4. Click Install
5. Enable the plugin

### Manual Installation

1. Download `main.js`, `manifest.json`, and `styles.css` from the latest release
2. Create a new directory `equation-converter` in your vault's `.obsidian/plugins/` directory
3. Copy the downloaded files into the new directory
4. Enable the plugin in Obsidian's Community Plugins settings

## Usage

1. Open the markdown file containing OpenAI-style equations
2. Either:
   - Click the calculator icon in the left ribbon, or
   - Open the command palette (Ctrl/Cmd + P) and search for "Convert Equations"
3. All equations in the current file will be automatically converted

### Example

Before:
```markdown
The quadratic formula is \(x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}\)

And here's the equation in display mode:
\[\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}\]
```

After:
```markdown
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$

And here's the equation in display mode:
$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
$$
```

## Development

This plugin is built using TypeScript and the Obsidian API. To build from source:

1. Clone this repository
2. Install dependencies with `npm install`
3. Build with `npm run build`
4. Copy `main.js`, `manifest.json`, and `styles.css` to your vault's plugins directory

## Support

If you encounter any issues or have suggestions for improvements:
- Open an issue on the [GitHub repository](https://github.com/nyimbi/obsidian-equation-converter)
- Contact me through [GitHub](https://github.com/nyimbi)

## License

MIT License. See [LICENSE](LICENSE) for details.

## Changelog

### 1.0.0 (2024-12-01)
- Initial release
- Basic equation conversion functionality
- Ribbon icon and command palette integration
- Support for both inline and display equations

## Author

Created by [Nyimbi Odero](https://github.com/nyimbi)

## Support the Project

If you find this plugin useful, consider:
- Star the repository on GitHub
- Report bugs or suggest features through GitHub issues
- Contributing to the codebase
- Sharing it with others who might find it helpful

## Acknowledgments

- The Obsidian team for creating an excellent platform
- The Obsidian community for their support and feedback