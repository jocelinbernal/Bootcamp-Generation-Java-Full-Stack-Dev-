def addmultiplenumbers(numeros):
    total = 0
    for n in numeros:
        total += n
    return total


def multiplymultiplenumbers(numeros):
    producto = 1
    for n in numeros:
        producto *= n
    return producto


def isiteven(num):
    return num % 2 == 0


def isitaninteger(num):
    return num == int(num)


def main():
    print("Hello learners!")


if __name__ == "__main__":
    main()