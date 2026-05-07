const http = require('http');
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const port = Number(process.env.PORT || process.argv[2] || 8000);
const host = '127.0.0.1';

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml'
};

function send(res, status, body, contentType = 'text/plain; charset=utf-8'){
  res.writeHead(status, { 'Content-Type': contentType });
  res.end(body);
}

http.createServer((req, res) => {
  const url = new URL(req.url, `http://${host}:${port}`);
  const requestPath = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname.slice(1));
  const filePath = path.resolve(root, requestPath);

  if(!filePath.startsWith(root)) {
    send(res, 403, 'Forbidden');
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if(error) {
      send(res, 404, 'Not found');
      return;
    }

    send(res, 200, data, contentTypes[path.extname(filePath)] || 'application/octet-stream');
  });
}).listen(port, host, () => {
  console.log(`Cliniquei local: http://${host}:${port}/`);
});

