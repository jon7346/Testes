numero = int(input('insira o numero que representa a tabuada a ser inserida: '))
resultado = 0 
for x in range(10):
    x = x +1 
    resultado = x * numero 
    print(x,'X',numero,'=', resultado)