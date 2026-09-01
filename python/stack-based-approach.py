input1 = ["abc(rtyh(dfgh)gghj(sdfgh)iuytre)", "adfgff)dfgh(dfghj)(dfghj"]
map1 = {"(":")"}

final_result=[]

for item in input1:
    stack=[]
    result_str = "balanced"

    for ch in item:
        if ch in map1:
            stack.append(ch)
        elif ch in map1.values():
            if not stack or map1[stack.pop()] !=ch:
                result_str = "not"
                break
    if stack:
        result_str = "not"
    final_result.append(result_str)

print(final_result)
            
