// Import fs module
const fs = require('fs');

// Write file
fs.writeFileSync('demo.txt', 'Hello from Node.js');

// Read file
const data = fs.readFileSync('demo.txt', 'utf-8');
console.log("File Content:", data);

// Append file
fs.appendFileSync('demo.txt', '\nThis is appended text');

// Delete file (optional)
// fs.unlinkSync('demo.txt');