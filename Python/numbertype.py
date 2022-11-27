"""This program let you enter two 
numbers and it will check if it is positive or
negative"""

Zahl = float(input('Zahl eingeben: '))
if Zahl > 0:
    print('Zahl ist positiv')
elif Zahl == 0:
    print('Zahl ist 0')
else:
    print('Zahl ist negativ')