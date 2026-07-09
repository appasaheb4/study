funcs=[]

for i in range(5):
    funcs.append(lambda: i)

for f in funcs:
    print(f())
## output
# 4
# 4
# 4
# 4
# 4