from rest_framework.routers import DefaultRouter
from app.views import TaskViewSet, UserViewSet, AuthViewSet
from django.urls import path, include


# Criando o roteador e registrando a view
router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename="task")
router.register(r'users', UserViewSet, basename="user")

urls_api =[
    path('auth/', AuthViewSet.as_view({'post': 'login'})),
    
] + router.urls