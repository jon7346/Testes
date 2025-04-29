function login() {
    const name = document.getElementById("name").value ;
    const password= document.getElementById("senha").value; 

    if (  name == localStorage.getItem(nome) && password == localStorage.getItem(senha)){
        alert("entrou")
       Document.getElementById("name").value = ""
        Document.getElementById("senha").value = ""
    }
    else {
        alert("senha ou usuário incorreto")
        
        
    }
 }
 function cadastrado() {
    const nome = document.getElementById("name").value
    const senha = document.getElementById("senha").value
   
     if ( localStorage.getItem(nome)) {
       alert("usuário ja cadastrado");
       return;
     } 
     else {
      localStorage.setItem(nome,senha);
      alert("Cadasto realizadoo !!!!")
      Document.getElementById("name").value = ""
      Document.getElementById("senha").value = ""
     }
     }