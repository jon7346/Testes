const fs = require('fs').promises;

console.log('Iniciando leitura do arquivo com Promises...');

fs.readFile('arquivo.txt', 'utf8')
.then((data)=> {

  console.log('Conteúdo do arquivo', data); 
})
.catch((err)=> { 
    console.error('Erro ao ler o arquivo',err)

}); 

console.log('Leitura do arquivo solicitada');
