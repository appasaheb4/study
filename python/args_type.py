def args_type(*args):
    # here always come in tuple format
    print({"datatype":type(args)}) ## tuple type
    # print(args)
print(args_type(1, 2, 3, 4, 5))
print(type((1, 2, 3, 4, 5)))
print(type([1,2,3,4,5]))