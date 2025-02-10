
function cadastro() {
 let nome = document.getElementById('nome') ;
 let senha = document.getElementById('senha');
       
 localStorage.setItem('nome',nome)
 localStorage.setItem('Senha',senha)
}
function login () {
let name = document.getElementById('name')
let password = document.getElementById('password')

let nome = localStorage.getItem('nome',nome)
let senha = localStorage.getItem('senha',senha)

if(password == senha & name == nome ) {
 
  
}
else  {
    alert('informações de login incorretas ')
}

}

