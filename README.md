# B★-Tree Visualizer and Library Management System

A comprehensive interactive web application that demonstrates the internal workings of B★-Trees (B-Star Trees) through a practical Library Management System. Built for Data Structures coursework with modern web technologies.

![B-Star Tree Visualizer](https://img.shields.io/badge/Data%20Structures-B★--Tree-blue) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)

## 🌟 Features

### 🎯 Core Functionality
- **Complete B★-Tree Implementation** - Full ADT with insertion, deletion, and search operations
- **Interactive Tree Visualization** - Real-time animated tree structure with node splitting and merging
- **Library Management System** - Practical application managing book records with ID, title, and author
- **Search Path Highlighting** - Visual traversal animation showing search algorithm in action
- **Dynamic Console** - Plain-English explanations of each operation for educational purposes

### 🎨 User Interface
- **Modern Glassmorphism Design** - Clean, professional interface with backdrop blur effects
- **Dark/Light Theme Toggle** - Seamless theme switching for different presentation environments
- **Responsive Layout** - Three-panel design that works perfectly on desktop and projector screens
- **Smooth GSAP Animations** - Professional-grade animations for node operations and transitions
- **Interactive Elements** - Hover effects, tooltips, and click handlers for enhanced user experience

### 📊 Educational Value
- **Real-time Operation Feedback** - Console messages explaining each step in simple terms
- **Visual Learning** - Animated demonstrations of tree splitting, merging, and rebalancing
- **Practical Application** - Shows how B★-Trees are used in real-world database systems
- **Faculty-Ready Presentation** - Designed for academic evaluation and viva demonstrations

## 🚀 Live Demo

**[View Live Demo](https://your-username.github.io/bstar-tree-visualizer)**

*Replace with your actual GitHub Pages or Vercel deployment URL*

## 📸 Screenshots

### Main Interface
![Main Interface](./assets/screenshot-main.png)

### Tree Visualization
![Tree Visualization](./assets/screenshot-tree.png)

### Dark Mode
![Dark Mode](./assets/screenshot-dark.png)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: Font Awesome 6
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel/GitHub Pages Ready

## 📦 Installation & Setup

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning the repository)

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/bstar-tree-visualizer.git
   cd bstar-tree-visualizer
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using Python server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   
   # Option 3: Using Node.js server
   npx serve .
   ```

3. **Start exploring!**
   - Insert books using the control panel
   - Watch the tree grow and split
   - Search for books to see path highlighting
   - Toggle between light and dark themes

## 🎯 Usage Guide

### Basic Operations

1. **Insert a Book**
   - Enter Book ID (number)
   - Enter Book Title
   - Enter Author Name
   - Click "Insert Book"
   - Watch the tree animation!

2. **Search for a Book**
   - Enter the Book ID you want to find
   - Click "Search Book"
   - Observe the highlighted search path

3. **Delete a Book**
   - Enter the Book ID to remove
   - Click "Delete Book"
   - See the tree rebalance automatically

4. **Reset Tree**
   - Click "Reset Tree" to clear all data
   - Confirm the action
   - Start fresh with a new tree

### Advanced Features

- **Theme Toggle**: Click the moon/sun icon in the top-right corner
- **About B★-Trees**: Click "About B★-Trees" for educational information
- **Operation Explanation**: Click "Explain Operation" to understand the last action
- **Node Details**: Click on any tree node to see contained book information

## 🎓 Educational Context

This project was developed as part of a **Data Structures and Algorithms** course to demonstrate:

- **B★-Tree Properties**: Self-balancing, sorted data maintenance
- **Tree Operations**: Insertion with splitting, deletion with merging, efficient search
- **Space Optimization**: B★-Trees maintain 2/3 full nodes for better space utilization
- **Practical Applications**: Database indexing, file systems, library management

### Key Learning Outcomes
- Understanding of advanced tree data structures
- Visualization of algorithmic processes
- Practical application development
- Modern web development techniques

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Fork this repository** to your GitHub account

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your forked repository

3. **Configure deployment**
   - Framework Preset: Other
   - Root Directory: `./`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

4. **Deploy**
   - Click "Deploy"
   - Your app will be live in minutes!

### GitHub Pages Deployment

1. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Deploy from a branch
   - Branch: main / (root)

2. **Access your site**
   - URL: `https://your-username.github.io/bstar-tree-visualizer`

### Netlify Deployment

1. **Drag and drop** the project folder to [netlify.com/drop](https://app.netlify.com/drop)
2. **Or connect GitHub** repository for automatic deployments

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Areas for Contribution
- Additional tree algorithms (AVL, Red-Black, etc.)
- More animation effects and transitions
- Mobile responsiveness improvements
- Additional educational content
- Performance optimizations
- Accessibility enhancements

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **[Your Name]** - *Initial work* - [@your-username](https://github.com/your-username)
- **[Group Member 2]** - *Contributor* - [@member2-username](https://github.com/member2-username)
- **[Group Member 3]** - *Contributor* - [@member3-username](https://github.com/member3-username)

## 🙏 Acknowledgments

- **Course Instructor**: [Professor Name] - Data Structures and Algorithms
- **Institution**: [Your College/University Name]
- **GSAP**: For amazing animation capabilities
- **Font Awesome**: For beautiful icons
- **Google Fonts**: For the Inter font family

## 📞 Support

If you have any questions or need help with the project:

- **Create an issue** in this repository
- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)

## 🔗 Related Projects

- [AVL Tree Visualizer](https://github.com/your-username/avl-tree-visualizer)
- [Binary Search Tree Animations](https://github.com/your-username/bst-animations)
- [Graph Algorithms Visualizer](https://github.com/your-username/graph-visualizer)

---

⭐ **Star this repository** if you found it helpful for your studies!

📚 **Perfect for**: Data Structures students, algorithm visualization enthusiasts, and anyone learning about B-Trees!

🎯 **Academic Use**: Feel free to use this project as a reference for your coursework, but please maintain academic integrity and cite appropriately.