// Import http module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Hello World');
});

// Listen on port 8080
server.listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
});