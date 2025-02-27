const http = require('http')

const HOST= "127.0.0.1"
const PORT = 5001 

const server = http.createServer((req,res)=>
    res.end(`
        <html>
        <head>
        <meta charset="utf-8">
        </head>
        <body>
        <h1>funfoo!!</h1>
        </body>
        </html>
        `)


)
server.listen(PORT, HOST,  () =>{
    console.log(`server is listening in http://${HOST}:${PORT}/`)
}
);