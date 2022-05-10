from rest_framework import routers
from .views import TicketsViewSet

router = routers.DefaultRouter()
router.register(r'projects', TicketsViewSet)
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = router.urls