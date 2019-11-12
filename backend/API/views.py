from django.shortcuts import render
from rest_framework import generics

from .models import Post,Good
from .serializers import PostSerializer,GoodSerializer

class ListPost(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class DetailPost(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class ListGood(generics.ListCreateAPIView):
    queryset = Good.objects.all()
    serializer_class = GoodSerializer

class DetailGood(generics.RetrieveUpdateDestroyAPIView):
    queryset = Good.objects.all()
    serializer_class = GoodSerializer
