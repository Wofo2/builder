from django.urls import re_path
from . import views


urlpatterns = [
    re_path(r'^createcompany/$', views.createCompany.as_view(), name='createCompany'),


]

