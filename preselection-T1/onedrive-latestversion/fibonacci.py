def FibonacciSequenceEvaluator(n):
    n=int(n)
    if n < 0:
        return "Valor incorrecto, elige un número entero positivo."
    elif n == 0:
        return 0
    elif n == 1 or n == 2:
        return 1
    else:
        return FibonacciSequenceEvaluator(n-1) + FibonacciSequenceEvaluator(n-2)
    
try:
    x=int(input("Introduce hasta qué posición de la sucesión de Fibonacci te gustaría calcular: "))
    for m in range(0,x):
        print(FibonacciSequenceEvaluator(m))
except ValueError:
    print("Valor incorrecto, elige un número entero positivo sin punto flotante.")