from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from app.models import Task, User
from app.serializers import AuthSerializer, TaskSerializer, UserSerializer
from rest_framework.decorators import action
from django.contrib.auth import authenticate

class TaskViewSet(viewsets.ModelViewSet):  # Verifique se está correto
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class UserViewSet(viewsets.ModelViewSet):  # Verifique se está correto
    queryset = User.objects.all()
    serializer_class = UserSerializer

class AuthViewSet(viewsets.ModelViewSet):
    queryset = UserSerializer(User.objects.all())
    serializer_class = AuthSerializer
    
    @action(methods=['post'], url_path="login" ,detail=False)
    def login(self, request):
      
        username = request.data['username']
        password = request.data['password']
        user = User.objects.filter(username=username, password=password)
        
        # Verifique se o usuário foi autenticado corretamente
        if user is not None:
            user = user.first()
            user_data = UserSerializer(user).data
            return Response({
                'message': 'Login realizado com sucesso!',
                'user': user_data,
            }, status=200)
        else:
            return Response({
                'message': 'Usuário ou senha incorretos!',
                'user': None,
            }, status=400)


    