//o projeto vai ser um teste de um site que hospedara  futuramente meus projetos, tudo depositado em uma maquina em minha residência
// passo a passo : 
// 1 precsiso aprender programar servidores em javascript 
// 2 vou criar uma estrutura que mantera o site funcionando localmente quando requisitado 
// 3 criar a estrutura a qual insiro os arquivos ou a url e hospedo meu site com os requisitos :
// o site precisa ser de dominio publico utlizando o http pra manter a segurança 
// tenho que proteger meus dados e evitar fraudes ou roubos de dados pra outros fins 
// os sites precisam se manster hospedados mesmo com o site prinsipal fechando 
// conhecimentos que necessito 
// preciso criar um sistema de armazenamento de arquivos 
// preciso criar hospedagem para meus sites 
// 


//1 importação

const fs = require('fs')
const express = require('express')
const multer = require('multer')
const htpp = require('http')

const HOST = 'teste' 
const porta = 8000

const UPLOAD_DIR = "./ " 