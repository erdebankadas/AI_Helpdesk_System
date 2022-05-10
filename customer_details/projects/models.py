from email.policy import default
#from typing_extensions import Required
from django.db import models
from django.conf import settings
#from .models import Customer
#from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.

class Customer(models.Model):
    name = models.CharField(max_length=100)
   
    #email = models.EmailField(max_length=30,default=None,null=True)
    phone_number = models.IntegerField(default=None,null=True)
    email = models.EmailField(max_length=30,default=None,null=True)

   
    #supported_image = models.ImageField(upload_to='images/' ,default=None,null=True)

    

    def __str__(self):
        return self.name