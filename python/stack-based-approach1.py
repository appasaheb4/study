input1 = ["abc(rtyh(dfgh)gghj(sdfgh)iuytre)", "adfgff)dfgh(dfghj)(dfghj"]

final_result = []

for item in input1:
    stack = []
    result_str = "balanced"
    
    for ch in item:
        if ch == "(":          # opening bracket
            stack.append(ch)
        elif ch == ")":        # closing bracket
            if not stack:      # nothing to match with
                result_str = "not"
                break
            else:
                stack.pop()    # matched one "("
    
    if stack:                  # leftover "(" means not balanced
        result_str = "not"
    
    final_result.append(result_str)

print(final_result)
