#input recebe uma string 
#split separa os valores com base nos espaços 
#map(int,..)converte cada item para int
#list( ) transforma o resultado em uma lista 
usuario = list(map(int,input('Insira o conjunto de numeros para o caluculo: '))) 


def soma(args):
 total = 0
 for numeros in (args):
  total = total + numeros 

 return(total)

def media(args):
 resu = 0 
 x = soma(*args)
 y = len(args)
 resu = x/y
  
 return(resu)

resultado = media(*usuario)

print(resultado )