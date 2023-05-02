from django.urls import path 
from . import views


urlpatterns = [
    path('', views.home, name='home'),
    path('signup', views.user_register, name='signup'),
    path('login', views.user_login, name='login'),
    path('logout', views.user_logout, name='logout'),
    path('emoji', views.emoji, name='emoji'),
    path('gallery', views.gallery, name='gallery'),
    path('todo', views.todo, name='todo'),
    path('books', views.books, name='books'),
]
