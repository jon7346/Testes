const express = require('express')
const multer = require('multer')
const fs = require('fs')
const path = require('path');
const { send } = require('process');

const app = express();
const PORT = 8080

const UPLOAD_DIR = '';

if(!fs.existsSync(UPLOAD_DIR)){
    fs.mkdirSync(UPLOAD_DIR);
}

const storage =multer.diskStorage(
    {destination: (req, file, cd) => {
        cd(null, UPLOAD_DIR);
    },
    filename: (req, file, cd ) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
    });
const upload = multer({ storage});
app.get('/', (req,res) => {
    res.send(`
        <h1>Gerenciador de Arquivos</h1>
        <form action="/upload" method="POST" entype="multipart/form-data">
        <input type="file" name="file" required />
        <button type="submit">Enviar Arquivo</button>
        </form>
        <br>
        <a href='/files">Ver arquivos armazenados</a>
        `);
});
app.post('upload', upload.single('file'), (req,res) => {
    const file = fs.readdirSync(UPLOAD_DIR);
    const fileLinks = files.map(file => '<li><a href="/files/${file}">${file}"')
    res.send(''

    )
})