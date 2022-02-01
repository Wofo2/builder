
from django.contrib import admin
from django.urls import path, include, re_path
from builder.settings import MEDIA_ROOT, MEDIA_URL, STATIC_ROOT, STATIC_URL
from builder.settings import MEDIA_ROOT, MEDIA_URL, STATIC_ROOT, STATIC_URL
from django.conf.urls.static import static
from rest_framework_simplejwt import views as jwt_views


urlpatterns = [
    path('api/god/', admin.site.urls),
    path('company/', include('b2b.urls')),
    path('users/', include('users.urls')),
    path('api/', include('main.urls')),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),

]
urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
urlpatterns += static(STATIC_URL,document_root=STATIC_ROOT)
