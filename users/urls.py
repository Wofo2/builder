from django.urls import re_path
from . import views


urlpatterns = [
    re_path(r'^admin_login', views.AdminLoginView.as_view(), name='admin_login'),
    re_path(r'^admin_forget_password/$', views.AdminForgetPasswordView.as_view(), name='admin_forget_password'),
    re_path(r'^admin_reset_password/(?P<user_id>[0-9]+)/$', views.AdminResetPasswordView.as_view(), name='admin_reset_password'),
]

