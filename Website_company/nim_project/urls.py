from django.contrib import admin
from django.urls import path
from pages.views import home, about, services, contact

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'), # Add URL pattern for homepage
    path('about/', about, name='about'),
    path('services/', services, name='services'),
    path('contact/', contact, name='contact'),
] 