from email.policy import default
#from typing_extensions import Required
from django.db import models
from django.conf import settings
#from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
"""""
class Project(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField()
    assigned_by = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='project_assigned_by',
    )
    assigned_to = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='project_assigned_to',
    )
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(null=True)

    def __str__(self):
        return self.title
        """
class Tickets(models.Model):
    title = models.CharField(max_length=100)
   
    email = models.EmailField(max_length=30,default=None,null=True)
    phone_number = models.IntegerField(default=None,null=True)

    #pro=(
        #('Fast','High'),
        #('On Hold ','Medium'),
        #('Delay ','Low'),
        

    #)
    
    ticket_priority = models.CharField(max_length=50,blank=True,null=True)
    #specify = models.CharField(max_length=500,default=False)
    supported_image = models.ImageField(upload_to='images/' ,default=None,null=True)

    pro1=(
        ('To do','To do'),
        ('Done ','Done'),
        ('Pending ','Pending'),
        

    )
    
    #ticket_status = models.CharField(max_length=50,blank=True,null=True,choices=pro1)
    
    

    
   
     
    
    #address = models.CharField(max_length=300,default=None,null=True)
    
    updated_as = models.DateTimeField(auto_now_add=True)
    

    def __str__(self):
          return self.title