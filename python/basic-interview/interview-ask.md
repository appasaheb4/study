```
nested = [1, [2, [3, 4], 5], 6]
def get_result(arr):
    result =[]
    for row in arr:
        if isinstance(row,list):
            result.extend(get_result(row))

        else:
            result.append(row)
    return result

print(get_result(nested))


## recursively yield from the inner list
def flatten(arr):
    for row in arr:
        if isinstance(row, list):
            # recursively yield from the inner list
            yield from flatten(row)
        else:
            yield row

# Use list() to consume the generator
print(list(flatten(nested)))

```

```
# ip = [-1,0,1,2,-1,-4]

# target=0

# output = [[-1, 0, 1], [-1, 2, -1], [0, 1, -1]]

 def getResult(arr):
        result =[]
        n = len(arr)
        for i in range(n):
            for j in range(i+1,n):
                for k in range(j+1,n):
                    if arr[i] + arr[j]+arr[k] == target:
                        result.append([arr[i],arr[j],arr[k]])
        return result

print(getResult(ip))

```

## Secret break

## CAP Theorem
