def PrimeNumberEvaluator(number):
    try:
        number = int(number)
        factors = []
        if number <= 1:
            print(f"{number} NO es un número primo, intenta con un entero positivo distinto.")
        else:
            for factor in range(2, number):
                if number % factor == 0:
                    factors.append(factor)
            if len(factors) == 0:
                print(f"{number} ES UN NÚMERO PRIMO.")
            else:
                print(f"{number} NO es un número primo, puesto que es divisible por: {', '.join(map(str, factors))}.")
    except ValueError:
        print("Número no válido. Intenta con un número entero positivo, que no sea de punto flotante.")

x=input("Escribe un número para evaluar si es o no un número primo: ")
PrimeNumberEvaluator(x)