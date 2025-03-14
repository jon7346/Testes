


usuario = int(input("insira o numero o qual pertence a tabuada"))
numero = usuario
tabuada = {}
y = 0 
for x in range(10):
  y = y +1
  tabuada = print(f"{y} * {numero} = {numero * y}") 

print(*tabuada)
