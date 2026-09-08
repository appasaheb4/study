arr1= [1,0,1,1,0]
def bubble_sort_desc(arr):
    for i in range(n:=len(arr)):
        for j in range(0,n-i-1):
            if arr[j] < arr[j+1]:
                arr[j], arr[j+1]= arr[j+1], arr[j]
    return arr
print(bubble_sort_desc(arr1))

# def two_pointer_sort_desc(arr):
#     left, right= 0, len(arr)-1
#     while left < right:
#         if arr[left]==0 and arr[right]==1:
#             arr[left],arr[right]=arr[right], arr[left]
#         if arr[left]==1:
#             left+=1
#         if arr[right]==0:
#             right -=1
#     return arr
# print(two_pointer_sort_desc(arr1))


