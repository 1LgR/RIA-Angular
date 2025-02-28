from app.models import Task, User


from rest_framework import serializers
class TaskSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=User.objects.all())
    class Meta:
        model = Task
        fields = ['id', 'nome', 'feito', 'user']
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']  # Adicionei o campo password

class AuthSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    
    class Meta:
        model = User
        fields = ['username', 'password']
        