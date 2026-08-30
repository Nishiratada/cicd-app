const http = require('http');

const server = http.createServer((req, res) => {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('CI/CD Pipeline Application is Running!\n');
});

server.listen(8888, () => {
console.log('Server running on port 8888');
});
