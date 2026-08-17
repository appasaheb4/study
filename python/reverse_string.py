def reverse_string(words):
    words_list = words.split()
    return ' '.join(words_list[::-1])

print(reverse_string('I love india'))



def reverse_string1(s):
    result = ""
    for char in s:
        result = char + result
    return result

print(reverse_string1("I love india"))



print('new methods'[::-1])
print(sum((10,20,5)))
print(sum([1,2,3,4]))
