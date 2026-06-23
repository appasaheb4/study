def get_combinations(arr):
    result =[]

    def helper(start,combo):
        if(combo):
            result.append(combo[:])
        
        for i in range(start,len(arr)):
            combo.append(arr[i])
            helper(i+1, combo)
            combo.pop()
    helper(0,[])
    return result

basket = ["apple","banana","mango"]
print(get_combinations(basket))
