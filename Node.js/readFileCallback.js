const fs = require('fs'); 

//notifica o inicio do arquivo 
console.log('Iniciando leitura do arquivo...')

// usa o modulo fs para ler o arquivo 
fs.readFile('arquivo.txt','utf8', (err, data) => {
    //funcão em caso de erro 
    if(err){
        console.error('Error ao ler o arquivo', err); 
        return; 
    }
    //funcão para mostrar conteúdo do arquivo no terminal 
    console.log ('Conteúdo do arquivo: ', data); 
}); 
//função para sinalizar o termino da execução 
console.log("Leitura do arquivo solicitada");