from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.core.mail import send_mail
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_exempt
import json

from .forms import CustomUserCreationForm, TaskForm
from .models import Contact, Task, Book, Customer


# Create your views here.

# HOME PAGE
def     home(request):
    
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        contact = Contact(name=name, email=email, message=message)
        contact.save()
        return JsonResponse({'success': True})
    
    return render(request, 'users/home.html')


@csrf_exempt
def save_customer(request):
    if request.method == 'POST':
        # Get the data from the request body
        data = json.loads(request.body)

        # Extract the customer information
        book_id = data.get('book_id')
        name = data.get('name')
        address = data.get('address')
        email = data.get('email')
        card_number = data.get('card_number')
        expiry_date = data.get('expiry')
        cvc = data.get('cvc')

        try:
            # Retrieve the book object
            book = Book.objects.get(id=book_id)

            # Save the customer to the database with the book foreign key
            customer = Customer(
                book=book,
                name=name,
                address=address,
                email=email,
                card_number=card_number,
                expiry_date=expiry_date,
                cvc=cvc
            )
            customer.save()

            # Return a success response
            return JsonResponse({'message': 'Customer information saved successfully.'})

        except Book.DoesNotExist:
            # Return an error response if the book does not exist
            return JsonResponse({'error': 'Book does not exist.'}, status=400)

    # Return an error response for non-POST requests
    return JsonResponse({'error': 'Invalid request method.'}, status=400)

# Register User
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

# Login user
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

# Logout user
def user_logout(request):
        logout(request)
        return redirect('login')

# Emoji table
def emoji(request):     
    return render(request, 'users/emoji.html')

# gallery page
def gallery(request):
    return render(request, 'users/gallery.html')


# todo app
@login_required(login_url='login')
def todo(request):
    user = request.user
    tasks = Task.objects.filter(user=user)
    return render(request, 'users/todo.html', {'tasks': tasks})

# delete task in todo app
def delete_task(request, task_id):
    if request.method == 'POST':
        task = Task.objects.get(id=task_id)
        task.delete()
        return redirect('todo')
    
# create task in todo app
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

# books list
def books(request):
    books = Book.objects.all()
    context = {
        'books': books
    }
    return render(request, 'users/books.html', context)

