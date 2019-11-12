from rest_framework import serializers
from .models import Post, Good

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'content',
        )
        model = Post

class GoodSerializer(serializers.ModelSerializer):
    photo1=serializers.ImageField(use_url=True)
    photo2=serializers.ImageField(use_url=True)
    class Meta:
        fields = (
            'name',
            'photo1',
            'photo2',
            'price',
            'code',
            'quantity',
        )
        model = Good