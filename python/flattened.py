# matrix=[[1,2,3],[4,5,6],[7,8,9]]
# flattened = [num for row in matrix for num in row]
# print(flattened)

def flatten(matrix):
    result = []
    for row in matrix:
        for num in row:
            if isinstance(num, list):
                result.extend(flatten([num]))
            else:
                result.append(num)
    return result

matrix = [[1,2,3],[4,5,6],[7,8,9,[10,11,12 ,[13,14,15]]]]
flattened = flatten(matrix)
print(flattened)


