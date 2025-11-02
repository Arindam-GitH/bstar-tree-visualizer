// B★-Tree Implementation and Visualization
class BStarTree {
    constructor(order = 3) {
        this.order = order; // Minimum degree
        this.root = null;
        this.books = new Map(); // Store book details
        this.lastOperation = '';
    }

    // Node class for B★-Tree
    createNode(isLeaf = true) {
        return {
            keys: [],
            children: [],
            isLeaf: isLeaf,
            id: Math.random().toString(36).substr(2, 9)
        };
    }

    // Insert a book
    insert(bookId, title, author) {
        const book = { id: bookId, title, author };
        this.books.set(bookId, book);

        if (!this.root) {
            this.root = this.createNode();
            this.root.keys.push(bookId);
            this.lastOperation = `Inserted Book ID ${bookId} as root node.`;
        } else {
            if (this.isFull(this.root)) {
                const newRoot = this.createNode(false);
                newRoot.children.push(this.root);
                this.splitChild(newRoot, 0);
                this.root = newRoot;
                this.lastOperation = `Root split occurred while inserting Book ID ${bookId}.`;
            }
            this.insertNonFull(this.root, bookId);
        }
        
        this.visualizeTree();
        this.updateTable();
        this.addConsoleMessage(`Inserted Book ID ${bookId} - "${title}" by ${author}`, 'success');
    }

    // Check if node is full
    isFull(node) {
        return node.keys.length === (2 * this.order - 1);
    }

    // Insert into non-full node
    insertNonFull(node, key) {
        let i = node.keys.length - 1;

        if (node.isLeaf) {
            node.keys.push(0);
            while (i >= 0 && node.keys[i] > key) {
                node.keys[i + 1] = node.keys[i];
                i--;
            }
            node.keys[i + 1] = key;
        } else {
            while (i >= 0 && node.keys[i] > key) {
                i--;
            }
            i++;
            
            if (this.isFull(node.children[i])) {
                this.splitChild(node, i);
                if (node.keys[i] < key) {
                    i++;
                }
            }
            this.insertNonFull(node.children[i], key);
        }
    }

    // Split child node
    splitChild(parent, index) {
        const fullChild = parent.children[index];
        const newChild = this.createNode(fullChild.isLeaf);
        
        const mid = this.order - 1;
        
        // Move half the keys to new node
        newChild.keys = fullChild.keys.splice(mid + 1);
        
        // Move children if not leaf
        if (!fullChild.isLeaf) {
            newChild.children = fullChild.children.splice(mid + 1);
        }
        
        // Move middle key up to parent
        parent.children.splice(index + 1, 0, newChild);
        parent.keys.splice(index, 0, fullChild.keys.splice(mid, 1)[0]);
    }

    // Search for a book
    search(key) {
        const result = this.searchNode(this.root, key);
        if (result.found) {
            this.lastOperation = `Found Book ID ${key} in the tree.`;
            this.addConsoleMessage(`Found Book ID ${key} - "${this.books.get(key).title}"`, 'success');
            this.highlightSearchPath(key);
        } else {
            this.lastOperation = `Book ID ${key} not found in the tree.`;
            this.addConsoleMessage(`Book ID ${key} not found in the library`, 'error');
        }
        return result;
    }

    // Search in specific node
    searchNode(node, key) {
        if (!node) return { found: false, path: [] };
        
        let i = 0;
        while (i < node.keys.length && key > node.keys[i]) {
            i++;
        }
        
        if (i < node.keys.length && key === node.keys[i]) {
            return { found: true, node: node, index: i, path: [node] };
        }
        
        if (node.isLeaf) {
            return { found: false, path: [node] };
        }
        
        const childResult = this.searchNode(node.children[i], key);
        childResult.path.unshift(node);
        return childResult;
    }

    // Delete a book
    delete(key) {
        if (!this.books.has(key)) {
            this.addConsoleMessage(`Book ID ${key} not found in the library`, 'error');
            return;
        }

        const bookTitle = this.books.get(key).title;
        this.books.delete(key);
        
        if (this.root) {
            this.deleteFromNode(this.root, key);
            
            // If root becomes empty, make its only child the new root
            if (this.root.keys.length === 0 && !this.root.isLeaf) {
                this.root = this.root.children[0];
            }
            
            // If tree becomes completely empty
            if (this.root && this.root.keys.length === 0 && this.root.isLeaf) {
                this.root = null;
            }
        }
        
        this.lastOperation = `Deleted Book ID ${key} from the tree.`;
        this.visualizeTree();
        this.updateTable();
        this.addConsoleMessage(`Deleted Book ID ${key} - "${bookTitle}"`, 'success');
    }

    // Delete from specific node (simplified implementation)
    deleteFromNode(node, key) {
        const keyIndex = node.keys.indexOf(key);
        
        if (keyIndex !== -1) {
            if (node.isLeaf) {
                node.keys.splice(keyIndex, 1);
            } else {
                // For simplicity, we'll just remove the key
                // In a full implementation, we'd handle internal node deletion properly
                node.keys.splice(keyIndex, 1);
            }
        } else if (!node.isLeaf) {
            // Find child that might contain the key
            let childIndex = 0;
            while (childIndex < node.keys.length && key > node.keys[childIndex]) {
                childIndex++;
            }
            
            if (childIndex < node.children.length) {
                this.deleteFromNode(node.children[childIndex], key);
            }
        }
    }

    // Reset the tree
    reset() {
        this.root = null;
        this.books.clear();
        this.lastOperation = 'Tree has been reset.';
        this.visualizeTree();
        this.updateTable();
        this.addConsoleMessage('Tree has been reset. All books removed.', 'info');
    }

    // Visualize the tree
    visualizeTree() {
        const container = document.getElementById('treeContainer');
        
        if (!this.root || this.root.keys.length === 0) {
            container.innerHTML = `
                <div class="tree-placeholder">
                    <i class="fas fa-tree"></i>
                    <p>Tree is empty. Insert a book to start!</p>
                </div>
            `;
            return;
        }

        container.innerHTML = '';
        this.renderNode(this.root, container, 0, 0, container.offsetWidth / 2);
    }

    // Render individual node
    renderNode(node, container, level, index, x) {
        const nodeElement = document.createElement('div');
        nodeElement.className = 'tree-node';
        nodeElement.id = `node-${node.id}`;
        nodeElement.style.left = `${x - 40}px`;
        nodeElement.style.top = `${level * 80 + 20}px`;
        nodeElement.textContent = node.keys.join(', ');
        
        // Add click handler to show book details
        nodeElement.addEventListener('click', () => {
            this.showNodeDetails(node);
        });
        
        container.appendChild(nodeElement);

        // Animate node appearance
        gsap.from(nodeElement, {
            duration: 0.5,
            scale: 0,
            opacity: 0,
            ease: "back.out(1.7)"
        });

        // Render children
        if (!node.isLeaf && node.children.length > 0) {
            const childSpacing = Math.max(100, container.offsetWidth / (node.children.length + 1));
            const startX = x - (childSpacing * (node.children.length - 1)) / 2;
            
            node.children.forEach((child, i) => {
                const childX = startX + (i * childSpacing);
                
                // Draw connection line
                this.drawConnection(container, x, level * 80 + 60, childX, (level + 1) * 80 + 20);
                
                // Render child node
                this.renderNode(child, container, level + 1, i, childX);
            });
        }
    }

    // Draw connection between nodes
    drawConnection(container, x1, y1, x2, y2) {
        const line = document.createElement('div');
        line.className = 'tree-connection';
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.width = `${length}px`;
        line.style.left = `${x1}px`;
        line.style.top = `${y1}px`;
        line.style.transform = `rotate(${angle}deg)`;
        
        container.appendChild(line);
        
        // Animate line appearance
        gsap.from(line, {
            duration: 0.3,
            scaleX: 0,
            ease: "power2.out"
        });
    }

    // Highlight search path
    highlightSearchPath(key) {
        const result = this.searchNode(this.root, key);
        if (result.found) {
            result.path.forEach((node, index) => {
                setTimeout(() => {
                    const nodeElement = document.getElementById(`node-${node.id}`);
                    if (nodeElement) {
                        nodeElement.classList.add('highlight');
                        setTimeout(() => {
                            nodeElement.classList.remove('highlight');
                        }, 1000);
                    }
                }, index * 300);
            });
        }
    }

    // Show node details
    showNodeDetails(node) {
        const books = node.keys.map(key => this.books.get(key)).filter(book => book);
        const details = books.map(book => `${book.id}: "${book.title}" by ${book.author}`).join('\n');
        this.addConsoleMessage(`Node contains: ${details}`, 'info');
    }

    // Add message to console
    addConsoleMessage(message, type = 'info') {
        const console = document.getElementById('console');
        const messageElement = document.createElement('div');
        messageElement.className = `console-message ${type}`;
        
        const icon = type === 'success' ? 'check-circle' : 
                    type === 'error' ? 'exclamation-triangle' : 
                    type === 'info' ? 'info-circle' : 'terminal';
        
        messageElement.innerHTML = `
            <i class="fas fa-${icon}"></i>
            <span>${message}</span>
        `;
        
        console.appendChild(messageElement);
        console.scrollTop = console.scrollHeight;
        
        // Remove old messages if too many
        const messages = console.querySelectorAll('.console-message');
        if (messages.length > 20) {
            messages[0].remove();
        }
    }

    // Update library table
    updateTable() {
        const tableBody = document.getElementById('tableBody');
        
        if (this.books.size === 0) {
            tableBody.innerHTML = '<tr class="empty-row"><td colspan="3">No books in the library yet</td></tr>';
            return;
        }
        
        const sortedBooks = Array.from(this.books.values()).sort((a, b) => a.id - b.id);
        
        tableBody.innerHTML = sortedBooks.map(book => `
            <tr>
                <td>${book.id}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
            </tr>
        `).join('');
    }
}

// Global variables
let bTree = new BStarTree();
let isDarkMode = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tree visualization
    bTree.visualizeTree();
    
    // Add welcome message
    bTree.addConsoleMessage('B★-Tree Visualizer initialized. Ready for operations!', 'info');
    
    // Add some sample data for demonstration
    setTimeout(() => {
        bTree.addConsoleMessage('Tip: Try inserting Book ID 50, 25, 75 to see tree splitting in action!', 'info');
    }, 2000);
});

// Insert book function
function insertBook() {
    const bookId = parseInt(document.getElementById('bookId').value);
    const bookTitle = document.getElementById('bookTitle').value.trim();
    const bookAuthor = document.getElementById('bookAuthor').value.trim();
    
    if (!bookId || !bookTitle || !bookAuthor) {
        bTree.addConsoleMessage('Please fill in all fields (Book ID, Title, and Author)', 'error');
        return;
    }
    
    if (bTree.books.has(bookId)) {
        bTree.addConsoleMessage(`Book ID ${bookId} already exists in the library`, 'error');
        return;
    }
    
    bTree.insert(bookId, bookTitle, bookAuthor);
    
    // Clear input fields
    document.getElementById('bookId').value = '';
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
}

// Delete book function
function deleteBook() {
    const bookId = parseInt(document.getElementById('bookId').value);
    
    if (!bookId) {
        bTree.addConsoleMessage('Please enter a Book ID to delete', 'error');
        return;
    }
    
    bTree.delete(bookId);
    document.getElementById('bookId').value = '';
}

// Search book function
function searchBook() {
    const bookId = parseInt(document.getElementById('bookId').value);
    
    if (!bookId) {
        bTree.addConsoleMessage('Please enter a Book ID to search', 'error');
        return;
    }
    
    bTree.search(bookId);
}

// Reset tree function
function resetTree() {
    if (confirm('Are you sure you want to reset the tree and remove all books?')) {
        bTree.reset();
    }
}

// Show about modal
function showAbout() {
    document.getElementById('aboutModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('aboutModal').style.display = 'none';
}

// Explain last operation
function explainLastOperation() {
    if (bTree.lastOperation) {
        bTree.addConsoleMessage(`Last Operation: ${bTree.lastOperation}`, 'info');
    } else {
        bTree.addConsoleMessage('No operations performed yet. Try inserting, deleting, or searching for a book!', 'info');
    }
}

// Toggle theme
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.className = isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    
    // Re-visualize tree to update colors
    bTree.visualizeTree();
}

// Handle Enter key in input fields
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const activeElement = document.activeElement;
        if (activeElement.tagName === 'INPUT') {
            insertBook();
        }
    }
});

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('aboutModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Add some sample books for demonstration (optional)
function loadSampleData() {
    const sampleBooks = [
        { id: 50, title: "Data Structures and Algorithms", author: "Thomas Cormen" },
        { id: 25, title: "Introduction to Programming", author: "John Smith" },
        { id: 75, title: "Advanced Database Systems", author: "Jane Doe" },
        { id: 15, title: "Computer Networks", author: "Andrew Tanenbaum" },
        { id: 35, title: "Operating Systems", author: "William Stallings" }
    ];
    
    sampleBooks.forEach((book, index) => {
        setTimeout(() => {
            bTree.insert(book.id, book.title, book.author);
        }, index * 1000);
    });
}

// Uncomment the line below to load sample data on page load
// setTimeout(loadSampleData, 3000);