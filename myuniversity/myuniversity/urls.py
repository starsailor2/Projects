# myuniversity/urls.py
from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.homepage, name='homepage'),
    path('about/', views.about, name='about'),
    path('academics/', views.academics, name='academics'),
    path('admissions/', views.admissions, name='admissions'),
    path('campus-life/', views.campus_life, name='campus_life'),
    path('library/', views.library, name='library'),
    path('contact/', views.contact, name='contact'),
]
