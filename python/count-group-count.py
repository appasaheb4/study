name="aabbabcd"
result=[]

count_dict={}
prev=name[0]
count_dict[prev]=1

for ch in name[1:]:
    if ch == prev:
        count_dict[prev] +=1
    else:
        result.append(f"{prev}: {count_dict[prev]}")
        # count_dict[prev]=0
        prev= ch
        count_dict[prev]=1
#result.append(f"{prev}: {count_dict[prev]}")
print(result," ".join(result))


