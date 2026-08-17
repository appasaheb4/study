arr1= [1,0,1,1,0]
# desc_arr = sorted(arr1, reverse=True)
# print(desc_arr)
arr1.sort(reverse=True)
print(arr1)


def bubble_sort_desc(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0,n-i-1):
            if arr[j] < arr[j+1]:
                arr[j], arr[j+1]= arr[j+1], arr[j]
    return arr
print(bubble_sort_desc(arr1))


## missing number in array
arr =[1,2,3,5]
n=5
def find_missing(arr,n):
    total_sum= n*(n+1)//2
    arr_sum=sum(arr)
    return total_sum - arr_sum

def find_missing1(arr,n):
    total_sum= n*(n+1)//2
    arr_sum=0
    for item in arr:
        arr_sum += item
    return total_sum - arr_sum
print(find_missing(arr,n))