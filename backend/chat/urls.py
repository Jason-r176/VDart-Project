from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_root), 
    path('messages/', views.MessageList.as_view(), name='message-list'),
 # a simple test endpoint
]
