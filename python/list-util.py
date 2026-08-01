arr = [1, 2, 3, 1, 3, 4, 5]
duplicate_result = [item for index, item in enumerate(arr) if arr.index(item) != index]
print("duplicate_result:", duplicate_result)  # [1, 3]

unique_result =[]
for item in arr:
    if item not in unique_result:
        unique_result.append(item)

print("unique_result: ", unique_result)

non_duplicate_result = [item for item in arr if arr.count(item) ==1]
print("non_duplicate_result:", non_duplicate_result)