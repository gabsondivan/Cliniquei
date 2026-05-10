const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const root = process.cwd();
const port = Number(process.env.PORT || process.argv[2] || 8000);
const host = process.env.HOST || process.argv[3] || '0.0.0.0';

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml'
};

function send(res, status, body, contentType = 'text/plain; charset=utf-8'){
  res.writeHead(status, { 'Content-Type': contentType });
  res.end(body);
}

http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);
  const requestPath = url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname.slice(1));
  const filePath = path.resolve(root, requestPath);
  const rootWithSeparator = root.endsWith(path.sep) ? root : root + path.sep;

  if(filePath !== root && !filePath.startsWith(rootWithSeparator)) {
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
  console.log(`Cliniquei local: http://localhost:${port}/`);
  const networkUrls = Object.values(os.networkInterfaces())
    .flat()
    .filter(item => item && item.family === 'IPv4' && !item.internal)
    .map(item => `http://${item.address}:${port}/`);

  if(networkUrls.length) {
    console.log('Cliniquei na rede:');
    networkUrls.forEach(url => console.log(`  ${url}`));
  }
});
