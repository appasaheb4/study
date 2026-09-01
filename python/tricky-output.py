# a = 1
# b = {a:3}
# a = 5
# print(b)
## output = {1:3}

# def add(x,lst=[]):
#     lst.append(x)
#     return lst

# print(add(1))
# print(add(2))
# print(add(3))
## output
# [1]
# [1,2]
# [1,2,3]

# def add(x,lst=""):
#     lst+=str(x)
#     return lst

# print(1)
# print(2)
# print(3)

# a = (x for x in range(3))
# # print(a)
# print(list(a), end="")
# print(list(a))
## here generate use just first time output come

# def test():
#     try:
#         return 1
#     finally: 
#         return 2
# print(test())
## output = 2 

# print(True + True, end="") # 2
# print(True * 5, end="") # 5
# print(False * -3) # 0
# ## output = 250



# def outer():
#     x = 10
#     def inner():
#         nonlocal x # it's define nonlocal - it's works only nested func.
#         print(x)
#         x = 20
#     inner()
#     print(x)
# outer()


# a , *b, c = [1,2,3]
# print(a, b, c)
# ## output = 1 [2] 3

# a = [1,2]
# d = {tuple(a):a}
# a.append(3)
# print(d)
# # output  = {(1,2):[1,2,3]}

# x = 5
# nums = [x for x in range(3)]
# print(x)
# ## output = 5


# a , b = b , a = 1 , 2
# print(a , b)
# ## output 2 1


# print([] or [0]) # [0]
# print([0] and [1]) # [1]
# print([] or [0] and [1]) # [1]

