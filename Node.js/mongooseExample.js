const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/meubancodedados', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
})

 .then(() => console.log('Conectado ao MongoDB'))
 .catch(err => console.error('Erro ao conectar ao MongoDB:', err));
// Definir um schema e modelo para "Produto"

const produtoSchema = new mongoose.Schema({
 nome: String,
 preco: Number,
 emEstoque: Boolean,
});

const Produto = mongoose.model('Produto', produtoSchema);
// Middleware para analisar o corpo da requisição como JSON
app.use(express.json());

// Criar um novo produto
app.post('/produtos', async (req, res) => {
 try {
 const novoProduto = new Produto({
 nome: req.body.nome,
 preco: req.body.preco,
 emEstoque: req.body.emEstoque,
 });
 await novoProduto.save();
 res.status(201).json(novoProduto);
 } catch (err) {
 res.status(400).send('Erro ao criar produto: ' + err.message);
 }
});

// Obter todos os produtos
app.get('/produtos', async (req, res) => {
 try {
 const produtos = await Produto.find();
 res.json(produtos);
 } catch (err) {
 res.status(500).send('Erro ao obter produtos: ' + err.message);
 }
});

// Obter um produto pelo ID
app.get('/produtos/:id', async (req, res) => {
 try {
 const produto = await Produto.findById(req.params.id);
 if (!produto) return res.status(404).send('Produto não encontrado.');
 res.json(produto);
 } catch (err) {
 res.status(400).send('Erro ao obter produto: ' + err.message);
 }
});

// Atualizar um produto pelo ID
app.put('/produtos/:id', async (req, res) => {
 try {
 const produto = await Produto.findByIdAndUpdate(req.params.id, {
 nome: req.body.nome,
 preco: req.body.preco,
 emEstoque: req.body.emEstoque,
 }, { new: true });
 if (!produto) return res.status(404).send('Produto não encontrado.');
 res.json(produto);
 } catch (err) {
 res.status(400).send('Erro ao atualizar produto: ' + err.message);
 }
});

// Deletar um produto pelo ID
app.delete('/produtos/:id', async (req, res) => {
 try {
 const produto = await Produto.findByIdAndRemove(req.params.id);
 if (!produto) return res.status(404).send('Produto não encontrado.');
 res.json(produto);
 } catch (err) {
 res.status(400).send('Erro ao deletar produto: ' + err.message);
 }
});
app.listen(port, () => {
 console.log(`API rodando em http://localhost:${port}`);})