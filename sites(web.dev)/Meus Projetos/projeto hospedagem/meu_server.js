 //ideia incial do projeto é criar um site que receba outros e os hospede 
const path = require('path')
const fs = require('fs')
const http = require('http')
const express = require('express')
const multer = require('multer')

const Site = express()

const UPLOAD_DIR = ("./arquivos")

if(!fs.existsSync("./arquivos")) {
    fs.mkdirSync("/.arquivos")

}

const storage = multer.diskStorage({
 destino : (req, file, cb ) => {
 cb( null, UPLOAD_DIR);
 }
})
filename = (req,res,cb) => {
    cb( null , '${date.now})
} 
