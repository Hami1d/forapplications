def main():
    Zahl = int(input('Zahl eingeben: '))
    operation = int(input('Hochrechnen(1), Wurzelziehen(2): '))
    if operation == 1:
        hochzahl = int(input('hochzahl eingeben: '))
        Ergebnis1 = Zahl ** hochzahl
        print(Ergebnis1)
    elif operation == 2:
        Ergebnis2 = Zahl ** 0.5
        # print(int(Ergebnis2))
        print(Ergebnis2)

    else:
        main()

if __name__ == "__main__":
    main()