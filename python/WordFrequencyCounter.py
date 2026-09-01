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


def word_frequency1(str):
    obj={}
    for item in str:
        if item in obj:
            obj[item] = obj[item]+1
        else:
            obj[item]=1
    item = str[0]
    item_count = obj[item]
    for item1 in obj:
        if obj[item1] > item_count:
            item_count = obj[item1]
            item = item1
    return item
result1 = word_frequency1('appasaheb')
print(result1)