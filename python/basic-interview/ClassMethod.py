class MyClass:
    class_var="Shared"
    @classmethod
    def class_method(cls):
        return f"Class var is {cls.class_var}"
print(MyClass.class_method())