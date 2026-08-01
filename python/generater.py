def generater_func(list1):
    for item in list1:
        yield item


def main():
    order = [{"id":1,"amount":200},{"id":2,"amount":400},{"id":3, "amount":700}]
    for value in generater_func(order):
        print(value)


main()