from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from app.views import AuthViewSet, TaskViewSet, UserViewSet  # Supondo que TaskListView seja uma ViewSet
from app.urls import urls_api

# Configuração do schema Swagger
schema_view = get_schema_view(
    openapi.Info(
        title="Pastebin API",
        default_version='v1',
    ),
    public=True,
)
schema_view = get_schema_view(
    openapi.Info(
        title="API Documentation",
        default_version="v1",
    ),
    public=True,
)





urlpatterns = [
    path('admin/', admin.site.urls),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('api/', include(urls_api)),  # Incluindo as URLs da API
    
] 
