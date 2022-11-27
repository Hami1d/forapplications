"""This program check which number is greater.
Enter two numbers and then the Result appears"""

Zahl1 = float(input('Erste Zahl angeben: '))
Zahl2 = float(input('Zweite Zahl angeben: '))

if Zahl1 < Zahl2:
    print(f'{Zahl1}<{Zahl2}, {Zahl2} ist größer')
elif Zahl1 > Zahl2:
    print(f'{Zahl1}>{Zahl2}, {Zahl1} ist größer')
else:
    print(f'{Zahl1}={Zahl2}, {Zahl1} und {Zahl2} sind gleich groß')