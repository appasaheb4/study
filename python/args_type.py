def args_type(*args):
    print({"datatype":type(args)})
    print(args)

args_type(1, 2, 3, 4, 5)
args_type('a', 'b', 'c', 'd', 'e')