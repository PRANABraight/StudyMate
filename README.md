# StudyMate Chrome Extension

A Chrome extension for saving notes, links, and tabs while studying or researching online.

## Features

- 📝 Take quick notes with titles
- 🔗 Save important links
- 📌 Save current tab URLs
- 💾 Export notes and links as HTML
- 🗑️ Easy deletion of saved content
- 💫 Automatic URL detection and formatting
- 📱 Responsive design with Bootstrap

## Installation

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top-right corner
4. Click "Load unpacked"
5. Select the folder containing the extension files

## Usage

### Taking Notes
1. Click the StudyMate icon in your Chrome toolbar
2. Enter a title (optional)
3. Type your note in the text area
4. Click "SAVE NOTE"

### Saving Links
- **Current Tab**: Click "SAVE TAB" to save the current tab's URL
- **Manual Entry**: Paste a URL and click "SAVE NOTE"

### Exporting Content
1. Click the download icon
2. Choose a location to save the HTML file
3. Open the file in any web browser to view your notes and links

### Managing Content
- Double-click "DELETE ALL" to clear all saved content
- All notes and links are saved locally in your browser

## Technical Details

- Built with vanilla JavaScript
- Uses Chrome Extension APIs
- Styled with Bootstrap 5
- Local storage for data persistence
- FileSaver.js for file downloads

## File Structure

```
finalchrome/
├── manifest.json
├── index.html
├── index.js
├── index.css
└── README.md
```

## Development

To modify the extension:
1. Make changes to the source files
2. Reload the extension in `chrome://extensions/`
3. Click the refresh icon on the extension card

## License

This project is open source and available under the MIT License.