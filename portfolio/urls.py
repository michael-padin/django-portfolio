from django.urls import path 
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('signup', views.signup, name='signup'),
    path('login', views.login, name='login'),
    path('emoji', views.emoji, name='emoji'),
    path('gallery', views.gallery, name='gallery'),
    path('todo', views.todo, name='todo'),
    path('books', views.books, name='books'),
]
