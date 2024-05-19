# myuniversity/views.py
from django.shortcuts import render

def homepage(request):
    return render(request, 'homepage.html')

def about(request):
    return render(request, 'about.html')

def academics(request):
    return render(request, 'academics.html')

def admissions(request):
    return render(request, 'admissions.html')

def campus_life(request):
    return render(request, 'campus_life.html')

def library(request):
    return render(request, 'library.html')

def contact(request):
    return render(request, 'contact.html')
