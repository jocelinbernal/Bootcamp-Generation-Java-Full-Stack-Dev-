
def sumar(a, b):
    return a + b

def restar(a, b):
    return a - b

def multiplicar(a, b):
    return a * b

def dividir(a, b):
    if b == 0:
        return "Error: no se puede dividir entre cero"
    return a / b

print("Suma:", sumar(5, 3))
print("Resta:", restar(5, 3))
print("Multiplicacion:", multiplicar(5, 3))
print("Division:", dividir(5, 3))

def potencia(base, exponente):
    return base ** exponente

print("Potencia:", potencia(2, 3))