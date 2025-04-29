function login() {
    const name = document.getElementById("name").value ; 
    const password= document.getElementById("senha").value; 

    const nome_armazenado= localStorage.getItem(nome)
    const senha_armazenado = localStorage.getItem(senha)

    if (  name == nome_armazenado && password == senha_armazenado )
    {
       alert("entrou")
       Document.getElementById("name").value = ""
       Document.getElementById("senha").value = ""
      
    }
    else {
        alert("senha ou usuário incorreto")
        }
 }

    
    function abrir() { 


         window.location.href = 'index.html';

    }