from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from django_react_template.users.api.views import UserCreate, HelloWorld, LogoutAndBlacklistRefreshTokenForUserView

app_name = "users"


urlpatterns = [
    path('create/', UserCreate.as_view(), name="create_user"),
    path('token/obtain/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('blacklist/', LogoutAndBlacklistRefreshTokenForUserView.as_view(), name='token_blacklist'),
    path('hello/', HelloWorld.as_view(), name='hello_world'),
]
