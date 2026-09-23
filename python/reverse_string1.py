def reOrder(s: str)-> str:
    arr_str = s.split(' ')
    final_output =[]

    def is_letter(char:str) ->bool:
        lower = char.lower()
        return 'a' <= lower <= 'z'

    for word in arr_str:
        reverse_str=''
        symbols=''
        for char in word:
            if is_letter(char):
                reverse_str = char + reverse_str
            else:
                symbols +=char
        final_output.append(reverse_str+ symbols)
    return " ".join(final_output)


print({"output":reOrder('My, name is appa')})