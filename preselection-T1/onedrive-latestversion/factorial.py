def FactorialNumberCalculator(n):
    try:
        n=int(n)
        if n==0 or n==1:
            return 1
        elif n < 0:
            return "Operación no válida, intenta con un entero positivo."
        else:
            return n*FactorialNumberCalculator(n-1)
    except ValueError:
        return "Operación no válida, intenta con un entero positivo sin punto flotante."

x=input("Introduce el número del cual te gustaría calcular el factorial: ")
print(FactorialNumberCalculator(x))