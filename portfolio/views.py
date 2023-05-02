from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'users/home.html')

def signup(request):
    return render(request, 'users/signup.html')

def login(request):
    return render(request, 'users/login.html')

def emoji(request):
    return render(request, 'users/emoji.html')

def gallery(request):
    return render(request, 'users/gallery.html')

def todo(request):
    return render(request, 'users/todo.html')

def books(request):
    return render(request, 'users/books.html')




