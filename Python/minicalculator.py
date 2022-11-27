"""This program is an minicalculator 
with only two numbers and 4 operations"""
print('Minicalculator')
def calculator():
    Zahl1 = float(input('Zahl eingeben: '))
    Zahl2 = float(input('Zahl2 eingeben: '))
    operation = int(input('Auswahl: Addition(1), Subtraktion(2), Multiplikation(3), Division(4), Beenden(5): '))
    
    if operation == 1:
        add = Zahl1 + Zahl2
        print(f'{Zahl1} + {Zahl2} = {add}')
    
    elif operation == 2:
        sub = Zahl1 - Zahl2
        print(f'{Zahl1} - {Zahl2} = {sub}')
    
    elif operation == 3:
        mul = Zahl1 * Zahl2
        print(f'{Zahl1} * {Zahl2} = {mul}')
    
    elif operation == 4:
        div = Zahl1 / Zahl2
        print(f'{Zahl1} / {Zahl2} = {div}')
    
    elif operation == 5:
        exit()
    
    else:
        print('neu versuchen')
        calculator()

def main():
    calculator()

if __name__ == "__main__":
    main()