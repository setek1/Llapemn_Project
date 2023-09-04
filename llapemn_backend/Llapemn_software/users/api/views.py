from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.hashers import make_password
from users.models import User
from users.api.serializers import UserSerializer



class UserApiViewSet(ModelViewSet):

    permission_classes= [IsAdminUser]
    serializer_class= UserSerializer
    queryset=User.objects.all()
    #Encryptacion de password;a al crear usuario
    def create(self, request, *args, **kwargs):
        request.data['password']=make_password(request.data['password'])
        return super().create(request, *args, **kwargs)
    
    #Encryptacion de contrase;a al modificar usuario(password)
    def partial_update(self, request, *args, **kwargs):
            password = request.data.get('password') 
            if password is not None and password != '':
                request.data['password'] = make_password(password)
            else:
                del request.data['password']
            return super().partial_update(request, *args, **kwargs)
        # Anterior Codigo con problemas daba la pass de admin a users al actualizar
        # password=request.data['password']
        # if(password):
        #     request.data['password']=make_password(password)
        # else:
        #     request.data['password']=request.user.password
        # return super().update(request, *args, **kwargs)
    
#Muestra infromacion del usuario que esta logeado , esta pasa a urls
class UserView(APIView):
    permission_classes= [IsAuthenticated]

    def get(self, request):
        serializer= UserSerializer(request.user)
        return Response(serializer.data)