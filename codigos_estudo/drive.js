// Importação de módulos necessários
const express = require('express'); // Importa o framework Express para lidar com rotas HTTP.
const multer = require('multer'); // Importa o Multer para gerenciar uploads de arquivos.
const fs = require('fs'); // Importa o módulo File System para manipular arquivos e diretórios.
const path = require('path'); // Importa o módulo Path para trabalhar com caminhos de arquivos.

// Criação do aplicativo Express
const app = express(); // Instância do aplicativo Express, usada para definir rotas e iniciar o servidor.
const PORT = 8080; // Porta onde o servidor será executado.

// Configuração do diretório para armazenar os arquivos enviados
const UPLOAD_DIR = './uploads'; // Define o caminho da pasta onde os arquivos serão salvos.

// Verifica se o diretório existe; se não, cria o diretório.
if (!fs.existsSync(UPLOAD_DIR)) { // fs.existsSync verifica se o diretório já existe.
    fs.mkdirSync(UPLOAD_DIR); // fs.mkdirSync cria o diretório caso ele não exista.
}

// Configuração do Multer para gerenciar os arquivos enviados
const storage = multer.diskStorage({ // Define como e onde os arquivos serão armazenados.
    destination: (req, file, cb) => { // Define o destino dos arquivos enviados.
        cb(null, UPLOAD_DIR); // Define o diretório de destino para salvar os arquivos.
    },
    filename: (req, file, cb) => { // Define o nome do arquivo armazenado.
        cb(null, `${Date.now()}-${file.originalname}`); // Adiciona um timestamp ao nome original do arquivo para evitar duplicação.
    },
});
const upload = multer({ storage }); // Cria uma instância do Multer usando as configurações de armazenamento definidas.

// Rota para a página inicial
app.get('/', (req, res) => { // Define uma rota GET para a página principal do servidor.
    res.send(`
        <h1>Gerenciador de Arquivos</h1>
        <form action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="file" required />
            <button type="submit">Enviar Arquivo</button>
        </form>
        <br>
        <a href="/files">Ver arquivos armazenados</a>
    `); // Responde com um formulário HTML para envio de arquivos.
});

// Rota para upload de arquivos
app.post('/upload', upload.single('file'), (req, res) => { // Define uma rota POST para processar uploads.
    res.send(`Arquivo <b>${req.file.originalname}</b> enviado com sucesso! <a href="/files">Ver arquivos</a>`); // Responde confirmando o upload e fornece um link para ver os arquivos.
});

// Rota para listar os arquivos armazenados
app.get('/files', (req, res) => { // Define uma rota GET para exibir os arquivos armazenados.
    const files = fs.readdirSync(UPLOAD_DIR); // Lê os arquivos na pasta de uploads.
    const fileLinks = files.map(file => `<li><a href="/files/${file}">${file}</a></li>`).join(''); // Cria uma lista HTML com links para cada arquivo.
    res.send(`
        <h1>Arquivos Armazenados</h1>
        <ul>${fileLinks}</ul>
        <a href="/">Voltar</a>
    `); // Responde com a lista de arquivos em formato HTML.
});

// Rota para acessar um arquivo específico
app.get('/files/:filename', (req, res) => { // Define uma rota GET dinâmica para acessar arquivos específicos.
    const filePath = path.join(UPLOAD_DIR, req.params.filename); // Combina o diretório com o nome do arquivo solicitado.
    if (fs.existsSync(filePath)) { // Verifica se o arquivo solicitado existe.
        res.download(filePath); // Envia o arquivo para download pelo cliente.
    } else {
        res.status(404).send('Arquivo não encontrado'); // Retorna um erro 404 se o arquivo não existir.
    }
});

// Inicia o servidor
app.listen(PORT, () => { // Inicia o servidor na porta definida.
    console.log(`Servidor rodando em http://localhost:${PORT}`); // Exibe uma mensagem indicando que o servidor está ativo.
});
