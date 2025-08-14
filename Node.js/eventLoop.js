
// inicio da aplicação 
console.log("Inicio"); 

//agenda a operação assíncrona para ser executada após 2 segundos, não bloqueando o fluxo principal 
setTimeout(()=>{

    console.log('Operação Assíncrona')
},2000); 

//após a execução da tarefa assíncrona o console imprime fim no terminal 
console.log('fim'); 