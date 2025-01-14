 // importa modulos 
 // http  modulo do note js para criar servidores
 // fs modúlo para manipular o sistema de arquivos (file system), usado para ler arquivos 
 // path modulo usado para manipular e resolver caminhos de arquivos no sitema operacional 
 const http = require('http');
 const fs = require('fs');
 const path = require('path');
 
 //define o tipo de servidor 
 // local host (é aberto apenas pela maquina que hospeda)
 const HOST = 'localhost';
 // define a porta que o servidor irá utilizar 
 const PORT = 8080;
 
 // Criando o servidor
 // função que cria o servidor e define a req(requisição) e a res(resposta do servidor)
 const server = http.createServer((req, res) => {
 
     // combina partes do caminho do arqui em um unico, sendo 
     // dirname: diretório onde o script está rodando 
     // site a subpasta 
     // e "/" define o arquivo que ele abrirá sendo index.html o padrão 
     // e '/about.html' como exemplo para abrir o arquivo about.html
     let filePath = path.join(__dirname, './', req.url === '/' ? 'index.html' : req.url);
     // path extname Retorna a extensão do arquivo
     let extname = path.extname(filePath);
     // contentype define o tipo de arquivo envia (aqui o pressuposto é html)
     let contentType = 'text/html';
 
     // Determina o tipo de conteúdo
     // aqui temos um switch que roda diversos "if's" ou possibilidades para os tipos de arquivos 
     switch (extname) {
         case '.css': contentType = 'text/css'; break;
         case '.js': contentType = 'application/javascript'; break;
         case '.png': contentType = 'image/png'; break;
         case '.jpg': contentType = 'image/jpeg'; break;
     }
 
     // Lê e serve o arquivo solicitado
     fs.readFile(filePath, (err, content) => {
         if (err) {
             res.writeHead(404, { 'Content-Type': 'text/plain' });
             res.end('Arquivo não encontrado');
         } else {
             res.writeHead(200, { 'Content-Type': contentType });
             res.end(content, 'utf-8');
         }
     });
 });
 
 server.listen(PORT, HOST, () => {
     console.log(`Servidor rodando em http://${HOST}:${PORT}`);
 });
 
  

function hospedar() {
const HOST = HOST;

const port = 8080 

const server = http.createServer( __dirname,'/' + arquivo,'index.html',  );
}