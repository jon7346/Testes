//passo1 importar
const express = require('express')
const http = require('http')
const fs = require('fs')
const multer = require('multer')
const path = require('path')
// passo2 criar as funçoes essenciais 
const PORT = 8080
const app = express()
  

app.get('/', (req, res) => {
res.send(`
        <h1>to do</h1>
        <textarea></textarea>
        <input type = 'button'>enviar <input>`);
});
app.post 