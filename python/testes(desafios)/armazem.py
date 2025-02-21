
dados = [

]
usuario = 1
while usuario != 0 :
   
    
    print('insira x se quiser adicionar um dado ')
    print('insira y se quiser mostrar os dados ')
    print('insira d se quiser apagar um dado e coleque o numero o qual ele pertence na sequencia ')
    print('para para digite 0 ')
    usuario = input('insira o comando: ')

    if usuario == 'x' :
     dado = input('insira o dado:')
     dados.append(dado)
     continue

    elif usuario == 'y':
     print(dados)
     continue

    elif usuario == 'd' :
     dado = int(input('insira o indice do dado a ser excluido:'))
     dados.pop(dado)
     continue
    
    else:
     continue
