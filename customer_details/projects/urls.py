from rest_framework import routers
from .views import CustomerViewSet

router = routers.DefaultRouter()
router.register(r'projects', CustomerViewSet)
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.

urlpatterns = router.urls