## Python list comprehension
def args_list(*args):
    return [x for x in args if x % 2 == 0]


print(args_list(2,5,6,7))