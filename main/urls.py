from django.urls import re_path
from . import views
from django.urls import include
from rest_framework.routers import DefaultRouter



router = DefaultRouter()
router.register(r'category', views.CategoryView)
router.register(r'subcategory', views.SubCategoryView)
router.register(r'professionals', views.ProfessionalView)
router.register(r'order', views.ServiceOrderView)
router.register(r'address', views.UserAddressView)
router.register(r'question', views.QuestionView)
router.register(r'options', views.OptionView)
router.register(r'value_options', views.ValueOptionView)
router.register(r'users', views.UserDetailView)

urlpatterns = [
    re_path(r'', include(router.urls)),
    re_path(r'^signup/$', views.Signup.as_view(), name='register'),
    re_path(r'^companydetails/$', views.CompanyDetailsView.as_view(), name='companydetails'),
    re_path(r'^login/$', views.LoginView.as_view(), name='login'),
    re_path(r'logout/$', views.LogoutView.as_view(), name='logout'),
    re_path(r'^activate/(?P<user_id>[0-9]+)/$', views.Activate.as_view(), name='activate'),
    re_path(r'^me/$', views.ProfileView.as_view(), name='profile'),
    re_path(r'^myorders/',views.MyOrderView.as_view(), name="myorders"),
    re_path(r'^admin_order_view/$', views.AdminOrderView.as_view(), name='admin_order_view'),
    re_path(r'^user_order_view/(?P<id>[0-9]+)/$', views.UserOrderView.as_view(), name='user_order_view'),
    re_path(r'^count/$', views.CountView.as_view(), name='count'),
    re_path(r'^contactus/$', views.ContactUsView.as_view(), name='contactus'),
    re_path(r'^bulk_message/$', views.BulkMessageView.as_view(), name='count'),
    re_path(r'^hire_professional/(?P<id>[0-9]+)/$',views.HireProfessionalView.as_view(), name="hire"),
    re_path(r'^applink/$', views.AppLinkView.as_view(), name='app_link'),
    re_path(r'^admin_forget_password/$', views.AdminForgetPasswordView.as_view(), name='admin_forget_password'),
    re_path(r'^admin_login', views.AdminLoginView.as_view(), name='admin_login'),
    re_path(r'^admin_forget_password/$', views.AdminForgetPasswordView.as_view(), name='admin_forget_password'),
    re_path(r'^admin_reset_password/(?P<user_id>[0-9]+)/$', views.AdminResetPasswordView.as_view(), name='admin_reset_password'),
]
# urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)

