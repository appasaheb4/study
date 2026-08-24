# def get_triangle(n):
#     for i in range(1,n+1):
#         asc1 = "".join(str(j) for j in range(1, i+1))
#         desc1 = "".join(str(j) for j in range(i-1,0,-1))

#         print(asc1+desc1)

def get_triangle(n):
    for i in range(1,n+1):
        str1 =''
        for j in range(1,i+1):
            str1 += str(j)
        for j in range(i-1,0,-1):
            str1 += str(j)
        print(str1)

get_triangle(5)