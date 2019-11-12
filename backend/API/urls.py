from django.urls import path

from . import views

urlpatterns = [
    path('post/', views.ListPost.as_view()),
    path('post/<int:pk>/', views.DetailPost.as_view()),
    path('good/',views.ListGood.as_view()),
    path('good/<int:pk>',views.ListGood.as_view()),
]