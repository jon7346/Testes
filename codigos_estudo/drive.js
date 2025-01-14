//convoca os módulos
// faz o controle dos arquivos
const express = require('express');
// faz o uplaoad dos arquivos
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

// Pasta para armazenar os arquivos
const UPLOAD_DIR = './uploads';

// Certifique-se de que a pasta exista
if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR);
}

// Configuração do multer para upload de arquivos
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, UPLOAD_DIR);
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
const upload = multer({ storage });

// Rota para a página inicial (formulário de upload)
app.get('/', (req, res) => {
    res.send(`
        <h1>Gerenciador de Arquivos</h1>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="file" required />
            <button type="submit">Enviar Arquivo</button>
        </form>
        <br>
        <a href="/files">Ver arquivos armazenados</a>
    `);
});

// Rota para fazer upload de arquivos
app.post('/upload', upload.single('file'), (req, res) => {
    res.send(`Arquivo <b>${req.file.originalname}</b> enviado com sucesso! <a href="/files">Ver arquivos</a>`);
});

// Rota para listar os arquivos armazenados
app.get('/files', (req, res) => {
    const files = fs.readdirSync(UPLOAD_DIR);
    const fileLinks = files.map(file => `<li><a href="/files/${file}">${file}</a></li>`).join('');
    res.send(`
        <h1>Arquivos Armazenados</h1>
        <ul>${fileLinks}</ul>
        <a href="/">Voltar</a>
    `);
});

// Rota para acessar um arquivo específico
app.get('/files/:filename', (req, res) => {
    const filePath = path.join(UPLOAD_DIR, req.params.filename);
    if (fs.existsSync(filePath)) {
        res.download(filePath); // Baixa o arquivo
    } else {
        res.status(404).send('Arquivo não encontrado');
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});