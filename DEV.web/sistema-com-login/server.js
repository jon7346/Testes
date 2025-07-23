// importando o modulo http 
const http = require('http'); 
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

const server = http.createServer((req, res) => {

let filepath = req.url === '/' ? '/index.html' : req.url;
filepath = path.join(PUBLIC_DIR, filepath);

//verifica se o arquivo existe
const ext = path.extname(filepath);
const contentType = mimeTypes[ext] || 'application/octet-stream';

fs.readFile(filePath, (err, content) => {
//caso acontece um erro ao ler o arquivo
if(err){    
    // caso esse erro seja um arquivo nao encontrado
    if(err.code === 'ENOENT') {
    res.weriteHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>', 'utf-8');
    }
    else {
         res.writeHead(500, { 'Content-Type': 'text/plain' });
         res.end('500 - Erro interno do servidor');
      
    }
}
else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');

}
  });
});
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});