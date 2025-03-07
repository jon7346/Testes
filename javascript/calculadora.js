const http = require('http')
const { url } = require('inspector')

const path = require('path')

const HOST= "127.0.0.1"
const PORT = 5001 

                    
                       


const server = http.createServer((req,res)=>
    
    res.end(`
       <html>
            <head>
                <meta charset="utf-8">
                <link rel=stylesheet href="./style.css" type="text/css">
                <script>
                 function id(){
                    numero1 = parseInt(document.getElementById('numero1').value)
                    numero2 = parseInt(document.getElementById('numero2').value)
                    
                 }
                 function soma(){
                           id()
                         var resultado = numero1 + numero2 
                         alert(resultado)
                        }
                        function divisão(){
                            id()

                            var resultado = numero1 / numero2
                            alert(resultado)
                        }

                        function multiplicação(){
                            id()

                            var resultado = numero1 * numero2
                            alert(resultado)
                        }

                        function subtraçao(){
                            id()

                            var resultado = numero1 - numero2
                            alert(resultado)
                        }

                    
                </script>               
            </head>
            <body>
                <h1>Calculadora</h1>
                 <article>
                    <input type="text" id="numero1"><br>
                    <input type="text" id="numero2"><br>
                    <input type="button" id="botao" value="Soma" onclick=soma()>
                    <input type="button" id="botao" value="Subtração" onclick=subtraçao()>
                    <input type="button" id="botao" value="Divisão " onclick=divisão()>
                    <input type="button" id="botao" value="Multiplicação onclick=multiplicação()>
                                        
                 </article>
            </body>
        </html>
        `)
        


)
server.listen(PORT, HOST,  () =>{
    console.log(`server is listening in http://${HOST}:${PORT}/`)
    
 }
);
function abrir(){
    abrir(url="http://127.0.0.1:5001/", '_blank')
};
 