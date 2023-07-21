import string
import random
char=list(string.ascii_letters+string.digits+"@#$%&*")
random.shuffle(char)
n=int(input('enter the length of password:'))
password=list()
for i in range(n):
    password.append(random.choice(char))
random.shuffle(password)
print("".join(password))

