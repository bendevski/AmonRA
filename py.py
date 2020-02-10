import random


chicks = ["Ching chong", "Kimchi"]
dic = {
    chicks[0]:0,
    chicks[1]:0
}
for i in range(1000):
    dic[chicks[random.randint(0,1)]]+=1
print(dic)