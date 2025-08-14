const _= require('lodash');
//array de numeros até 6 
const numeros = [1,2,3,4,5,6];
//utlizando a função filter para satifazeer a condição em que o resto
//divisão seja igual a 0  
const numerosPares = _.filter(numeros, (num) => num%2 === 0 )

console.log('Números pares',numerosPares);

