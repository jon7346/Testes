"""
import random

nomes [
 { }
]
validação = None 
qtd =input("escreva uma quantidade de nomes a ser criada")
validação = int(qtd)

if qtd > 0 and validação == True : 
 nome_qtd = random()

 print(nome_qtd)
"""
"""
 import random
    alunos = 0
    sorteio = 0
    while alunos != '0':
alunos = str(input(
    'Vamos descobrir quem é o aluno sorteado. (digite 0 para parar o sorteio). Digite o nome da pessoa: '))
      if alunos != '0':
    sorteio = random.choice(alunos)
    print(sorteio, 'é o sorteado!!!')
"""
"""
import random
alunos = []
novo_aluno = "Ninguem"
sorteado = "sortudo"
while novo_aluno != "0":
    novo_aluno = str(input('Vamos descobrir quem é o aluno sorteado. (digite 0 para parar o sorteio). Digite o nome da pessoa: '))
    if novo_aluno == '0':
        break
    alunos.append(novo_aluno)
if alunos != []:
    sorteado = random.choice(alunos)
    print(f"{sorteado} foi o sorteado")
else:
    print("Lista vazia")
"""
"""
import random
alunos = []
sorteio = 0
while True:
    aluno = str(input('Vamos descobrir quem é o aluno sorteado. (digite 0 para parar o sorteio). Digite o nome da pessoa: '))
    if aluno == '0':
        break
    else:
        alunos.append(aluno)
if alunos != '0':
    sorteio = random.choice(alunos)
    print(sorteio, 'é o sorteado!!!')


Teste2

import random
alunos = []
sorteio = 0
c = -1
while True:
    aluno = str(input('Vamos descobrir quem é o aluno sorteado. (digite 0 para parar o sorteio). Digite o nome da pessoa: '))
    if aluno == '0':
        break
    else:
        alunos.append(aluno)
        c += 1

if alunos != '0':
    sorteio = alunos[random.randint(0, c)]
    print(sorteio, 'é o sorteado!!!')

"""
import random
alunos = []
sorteio = 0
while True:
    aluno = str(input('Vamos descobrir quem é o aluno sorteado. (digite 0 para parar o sorteio). Digite o nome da pessoa: '))
    if aluno == '0':
        break
    else:
        for x in range(10):
        x = random()
        alunos.append(aluno)
if alunos != '0':
    sorteio = random.choice(alunos)
    print(sorteio, 'é o sorteado!!!')
