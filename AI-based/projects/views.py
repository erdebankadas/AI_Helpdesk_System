from .models import Tickets
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import TicketsSerializer


class TicketsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows projects to be viewed or edited.
    """
    queryset = Tickets.objects.all()
    serializer_class = TicketsSerializer
    permission_classes = [permissions.IsAuthenticated]