from django.contrib import admin
from .models import Contact, Task, Customer, Book
# Register your models here.

admin.site.register(Contact)
admin.site.register(Task)
admin.site.register(Customer)
admin.site.register(Book)
