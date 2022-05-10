from django.contrib import admin
from .models import Customer

@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    #fields = ('full_name', 'relationship','email','phone_number','another_number','work_number','office_number','address','image')
    fields = ('name','phone_number','email' )