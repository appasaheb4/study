data=[{"title":'A',"amount":100},{"title":'B',"amount":200},{"title":'A',"amount":200}]

obj={}
for item in data:
    if item["title"] in obj:
        obj[item["title"]]= obj[item["title"]] + item["amount"]
    else:
        obj[item["title"]] = item["amount"]
print(obj)
