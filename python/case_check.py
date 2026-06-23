def myfunc(word):
    finalWord=''
    for item in word:
        if item.isupper():
            finalWord +=item.lower()
        else:
            finalWord +=item.upper()
    return finalWord
    
print(myfunc('AbcsDdsafGS'))