"""This program checks if the year is an leapyear or not"""

jahr = int(input('Jahr eingeben: '))

if jahr % 4 == 0:
    if jahr % 100 == 0:
        if jahr % 400 == 0:
                if jahr > 2022:
                    print(f'{jahr} ist ein Schaltjahr')
                else:
                    print(f'{jahr} war ein Schaltjahr')
        else:
            if jahr > 2022:
                print(f'{jahr} ist kein Schaltjahr')
            else:
                print(f'{jahr} war kein Schaltjahr')
    else:
        if jahr > 2022:
            print(f'{jahr} ist ein Schaltjahr')
        else:
            print(f'{jahr} war ein Schaltjahr')
else:
    if jahr > 2022:
        print(f'{jahr} ist kein Schaltjahr')
    else:
        print(f'{jahr} war kein Schaltjahr')