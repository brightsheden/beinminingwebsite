

from django.contrib import admin
from django.urls import path,include
from django.conf.urls.static import  static
from django.conf import settings
from django.views.generic import TemplateView 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',TemplateView.as_view(template_name='index.html')),
    path('api/',include('base.urls')),
    #path('', include('base.newurls'))
    
]


urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

