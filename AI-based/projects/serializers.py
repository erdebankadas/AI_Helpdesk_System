from rest_framework import serializers
from .models import Tickets


class TicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tickets
        #fields = [ 'id','full_name', 'relationship','email','phone_number','another_number','work_number','office_number','address','image']
        fields = [ 'id','title','email','phone_number','ticket_priority','supported_image','updated_as']
