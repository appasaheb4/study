def word_frequency(str):
    arr_str = str.split()
    obj={}
    for item in arr_str:
        if item in obj:
            obj[item] = obj[item]+1
        else:
            obj[item]=1
    return obj
result = word_frequency('hello world hello')
print(result)