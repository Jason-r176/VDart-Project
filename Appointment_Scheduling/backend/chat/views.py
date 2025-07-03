from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.response import Response



def api_root(request):
    return JsonResponse({"message": "API is working"})
class MessageList(APIView):
    def get(self, request):
        # Your logic here to return messages
        return Response({"messages": []})



# Create your views here.
