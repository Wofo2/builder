
from django.contrib import admin
from django.urls import path, include, re_path
from builder.settings import MEDIA_ROOT, MEDIA_URL, STATIC_ROOT, STATIC_URL
from builder.settings import MEDIA_ROOT, MEDIA_URL, STATIC_ROOT, STATIC_URL
from django.conf.urls.static import static
from rest_framework_simplejwt import views as jwt_views
from django.views.generic import TemplateView
from b2b.views import Home


urlpatterns = [
    # re_path(r'^$', Home),
    # re_path(r'^.*/$/', Home),

    path('api/god/', admin.site.urls),
    path('company/', include('b2b.urls')),
    path('users/', include('users.urls')),
    path('api/', include('main.urls')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    re_path(r"^.*/$", Home.as_view(), name='home'),
    re_path(r"^$", Home.as_view(), name='home'),


    # re_path(r"^.*/$", TemplateView.as_view(template_name="index.html"), name='home'),
    # re_path(r"^$", TemplateView.as_view(template_name="index.html"), name='home'),


]
urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
urlpatterns += static(STATIC_URL,document_root=STATIC_ROOT)
