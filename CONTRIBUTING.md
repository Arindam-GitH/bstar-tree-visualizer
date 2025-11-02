# Contributing to B★-Tree Visualizer

Thank you for your interest in contributing to the B★-Tree Visualizer project! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

1. **Check existing issues** first to avoid duplicates
2. **Use the issue template** when creating new issues
3. **Provide detailed information** including:
   - Browser and version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

1. **Open a feature request** issue
2. **Describe the feature** in detail
3. **Explain the use case** and benefits
4. **Consider implementation complexity**

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the coding standards
4. **Test thoroughly** across different browsers
5. **Commit with clear messages**
   ```bash
   git commit -m "Add: new tree balancing animation"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

## 📝 Coding Standards

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (2 spaces)
- Include appropriate ARIA labels for accessibility
- Validate markup using W3C validator

### CSS
- Follow BEM methodology for class naming
- Use CSS custom properties for theming
- Maintain consistent spacing and formatting
- Ensure responsive design principles
- Test in both light and dark themes

### JavaScript
- Use ES6+ features appropriately
- Follow camelCase naming convention
- Add JSDoc comments for functions
- Handle errors gracefully
- Maintain consistent code formatting

### Example Code Style

```javascript
/**
 * Inserts a new book into the B★-Tree
 * @param {number} bookId - Unique identifier for the book
 * @param {string} title - Book title
 * @param {string} author - Book author
 * @returns {boolean} Success status of insertion
 */
function insertBook(bookId, title, author) {
    // Validate input parameters
    if (!bookId || !title || !author) {
        console.error('Missing required parameters');
        return false;
    }
    
    // Implementation logic here
    return true;
}
```

## 🧪 Testing Guidelines

### Manual Testing Checklist

- [ ] Test all CRUD operations (Create, Read, Update, Delete)
- [ ] Verify animations work smoothly
- [ ] Check responsive design on different screen sizes
- [ ] Test both light and dark themes
- [ ] Validate accessibility with screen readers
- [ ] Test keyboard navigation
- [ ] Verify cross-browser compatibility

### Browser Support

Test your changes in:
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

## 🎨 Design Guidelines

### Visual Consistency
- Follow the established color scheme
- Maintain consistent spacing (8px grid system)
- Use the Inter font family
- Ensure proper contrast ratios (WCAG AA compliance)

### Animation Principles
- Use GSAP for complex animations
- Keep animations under 500ms for UI feedback
- Provide reduced motion alternatives
- Ensure animations enhance, not distract from, functionality

### Accessibility
- Maintain keyboard navigation support
- Provide alternative text for visual elements
- Ensure sufficient color contrast
- Support screen readers with proper ARIA labels

## 📚 Educational Focus

This project is designed for educational purposes. When contributing:

### Content Guidelines
- Keep explanations simple and clear
- Use plain English, avoid jargon
- Provide step-by-step operation descriptions
- Include visual feedback for all actions

### Learning Objectives
Contributions should support these learning goals:
- Understanding B★-Tree data structure
- Visualizing algorithmic processes
- Practical application development
- Modern web development techniques

## 🚀 Development Setup

### Prerequisites
- Git
- Modern web browser
- Text editor or IDE
- Basic knowledge of HTML, CSS, JavaScript

### Local Development
```bash
# Clone your fork
git clone https://github.com/your-username/bstar-tree-visualizer.git
cd bstar-tree-visualizer

# Start local server (choose one)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

### Project Structure
```
bstar-tree-visualizer/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript logic
├── README.md           # Project documentation
├── package.json        # Node.js configuration
├── vercel.json         # Vercel deployment config
├── .gitignore          # Git ignore rules
├── LICENSE             # MIT license
└── CONTRIBUTING.md     # This file
```

## 🔄 Pull Request Process

### Before Submitting
1. **Sync with upstream** to avoid conflicts
2. **Test thoroughly** on multiple browsers
3. **Update documentation** if needed
4. **Follow commit message conventions**

### PR Description Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari/Edge
- [ ] Mobile responsive
- [ ] Accessibility checked

## Screenshots
Include screenshots for UI changes

## Additional Notes
Any additional information or context
```

### Review Process
1. **Automated checks** must pass
2. **Code review** by maintainers
3. **Testing** in different environments
4. **Approval** and merge

## 🏷️ Versioning

We use [Semantic Versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)

## 📞 Getting Help

### Communication Channels
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Email**: [your.email@example.com] for direct contact

### Resources
- [MDN Web Docs](https://developer.mozilla.org/) - Web development reference
- [GSAP Documentation](https://greensock.com/docs/) - Animation library docs
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - WCAG reference

## 🎯 Contribution Ideas

### Beginner-Friendly
- Fix typos in documentation
- Improve error messages
- Add more tooltips and help text
- Enhance mobile responsiveness

### Intermediate
- Add new animation effects
- Implement additional tree operations
- Create more educational content
- Improve accessibility features

### Advanced
- Optimize performance for large datasets
- Add support for other tree types
- Implement advanced visualization features
- Create automated testing suite

## 🙏 Recognition

Contributors will be:
- Listed in the README.md file
- Mentioned in release notes
- Given credit in academic presentations (if applicable)

Thank you for helping make this project better for students and educators worldwide! 🌟