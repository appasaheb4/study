## config/setting.py
## config/urls.py

from django.urls import path, include

urlpatterns=[
    path('api/employee', include('employee.urls'))
]

## create employee app - python3 manage.py startapp employee
# employee/models.py
from django.db import models

class Employee(models.Model):
    name=models.CharField(max_length=100)
    department=models.CharField(max_length=100)
    age=models.IntegerField(default=18)
    salary=models.IntegerField(default=18000)

    def __str__(self):
        return self.name

# employee/urls.py
from django.urls import path
from .views import create_employee

urlpatterns=[
    path('create/', create_employee, name="create_employee")
]

# employee/views.py
from django.http import JsonResponse

def create_employee(request):
    if request.method == "POST":
        name = request.POST.get("name")
        department = request.POST.get("department")
        age = int(request.POST.get("age",0))
        salary = int(request.POST.get("salary",0))
        if salary <= 0:
            return JsonResponse({"error":"Please enter correct age"},status=400)
        elif not(name and department and age and salary):
            return JsonResponse({"error":"Please enter all fields details"}, status=400)
        else:
            from .models import Employee
            emp = Employee.objects.create(name=name,department=department,age=age,salary=salary)
            return JsonResponse({"message":"Employee created successfully.", "id":emp.id})
    else:
        return JsonResponse({"error":"Invalid request method"},status=405)
