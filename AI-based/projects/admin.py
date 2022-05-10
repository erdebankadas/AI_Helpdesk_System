from django.contrib import admin
from .models import Tickets

@admin.register(Tickets)
class TicketsAdmin(admin.ModelAdmin):
    #fields = ('full_name', 'relationship','email','phone_number','another_number','work_number','office_number','address','image')
    fields = ('title','email','phone_number','ticket_priority','supported_image')