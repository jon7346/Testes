import random 

numero = random.randint(0,10) 

usuario = 0

while  numero != usuario : 
 usuario = int(input("chute um numero:")) 

 if numero > usuario : 
  print("errou! muito pequeno o valor ")

 elif numero < usuario : 
  print("errou! muito grande ")

 else: 
  print('você acertou parabéns ')
  break