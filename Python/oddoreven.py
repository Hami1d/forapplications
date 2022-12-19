"""This program checks if the number is even or odd"""

print('Zahl gerade oder ungerade \n')
Zahl = int(input('Zahl eingeben: '))

if (Zahl%2) == 0:   # modulo (restlosteilbar) like 35/5 = 7, 36%5 = 1 => 3%2 = 1
    print('Zahl ist gerade')
else:
    print('Zahl ist ungerade')