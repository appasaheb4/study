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

