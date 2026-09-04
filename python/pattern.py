s = "2[bc]3[a]2[xyz]"

parts = s.split(']')

result=""
for part in parts:
    if part:
        num,text = part.split('[')
        result +=int(num) * text

print(result)