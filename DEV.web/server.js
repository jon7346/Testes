
const http = require('http');

// Configurações do servidor
const HOST = '127.0.0.1';
const PORT = 3000;

// Criando o servidor
const server = http.createServer((req, res) => {
    // Definir cabeçalhos
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Resposta HTML direto pelo JS
    res.end(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Servidor Node.js</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                h1 { color: #4CAF50; }
            </style>
        </head>
        <body>
            <h1>🚀 Servidor Node.js rodando!</h1>
            <p>Você criou uma página HTML apenas com JavaScript! 🎉</p>
        </body>
        </html>
    `);
});

// Inicia o servidor
server.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}/`);
});
