

from django.urls import path,include
from django.conf.urls.static import  static

from django.views.generic import TemplateView 
from .views import home
urlpatterns = [
    path('', home, name='home')

    
]



