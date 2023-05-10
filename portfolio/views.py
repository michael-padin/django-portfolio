from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.core.mail import send_mail
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

from .forms import CustomUserCreationForm, TaskForm
from .models import Contact, Task


# Create your views here.

def home(request):
    
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        contact = Contact(name=name, email=email, message=message)
        contact.save()
        return JsonResponse({'success': True})
    
    return render(request, 'users/home.html')

def user_register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.email = form.cleaned_data.get('email')
            user.name = form.cleaned_data.get('name')
            user.save()
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=user.username, password=raw_password)
            login(request, user)
            return redirect('home')
    else:
        form = CustomUserCreationForm()
    return render(request, 'users/signup.html', {'form': form})


def user_login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password  = request.POST['password']

        user = authenticate(request, username = username, password = password)

        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            context = {
                'error': 'Invalid login credentials. Please try again.'
            }
            return render(request, 'users/login.html', context)
    return render(request, 'users/login.html')

def user_logout(request):
        logout(request)
        return redirect('login')

def emoji(request):     
    return render(request, 'users/emoji.html')

def gallery(request):
    return render(request, 'users/gallery.html')


@login_required(login_url='login')
def todo(request):
    user = request.user
    tasks = Task.objects.filter(user=user)
    return render(request, 'users/todo.html', {'tasks': tasks})

def delete_task(request, task_id):
    if request.method == 'POST':
        task = Task.objects.get(id=task_id)
        task.delete()
        return redirect('todo')

def create_task(request):
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect('todo')
    else:
        form = TaskForm()
    return render(request, 'users/todo.html', {'form': form})


def books(request):
    return render(request, 'users/books.html')




