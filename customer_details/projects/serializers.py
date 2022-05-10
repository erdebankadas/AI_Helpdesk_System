from rest_framework import serializers
from .models import Customer


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        #fields = [ 'id','full_name', 'relationship','email','phone_number','another_number','work_number','office_number','address','image']
        fields = [ 'id','name','phone_number','email' ]
