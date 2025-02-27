const express = require('express')
const http =require('http')

var numero = prompt('insira um numero: ')
var bol = 0


if (numero % 3 == 0) {
 bol = 1     

}

switch(bol){
    
     case 1:
      document.write('fizz')
     case 2 : 
     document.write('buzz')

}

const HOST= "192.168.56.1"

const servzz