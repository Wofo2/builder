from django.contrib import admin
from .models import *




class CategoryAdmin(admin.ModelAdmin):
    search_fields = ['category']
    list_display = ['category','id','status']


class SubCategoryAdmin(admin.ModelAdmin):
    search_fields = ['subcategory','subcategory__category',]
    list_display = ['subcategory','id','category','status']


class UserAddressAdmin(admin.ModelAdmin):
    search_fields = ['user__name','user__phone_number']
    list_display = ['user']


class QuestionsAdmin(admin.ModelAdmin):
    search_fields = ['category__category','subcategory__subcategory','id']
    list_display = ['question','id','category','subcategory','select_type','required']


class OptionsAdmin(admin.ModelAdmin):
    search_fields = ['question__category__category','question__subcategory__subcategory','question__question','choice']
    list_display = ['choice','id','question',]


class ProfessionalsAdmin(admin.ModelAdmin):
    search_fields = ['name','subcategory__subcategory','contact_number2','contact_number1']
    list_display = ['name','id','contact_number1','service_charge','job_completed','joining_date']


class ServiceOrderAdmin(admin.ModelAdmin):
    search_fields = ['user__name','user__phone-number','subcategory__subcategory']
    list_display = ['user','subcategory','id','service_status','payment_status']


class ValueOptionAdmin(admin.ModelAdmin):
    search_fields = ['question__category__category', 'question__subcategory__subcategory','choice']
    list_display = ['choice','question','id','price','factor']

admin.site.register(Category,CategoryAdmin)
admin.site.register(SubCategory, SubCategoryAdmin)
admin.site.register(UserAddress, UserAddressAdmin)
admin.site.register(Questions, QuestionsAdmin)
admin.site.register(Options, OptionsAdmin)
admin.site.register(Professionals, ProfessionalsAdmin)
admin.site.register(ServiceOrder,ServiceOrderAdmin)
admin.site.register(ValueOption, ValueOptionAdmin)

admin.site.register(CompanyDetails)
admin.site.register(CompanyOperation)
admin.site.register(Paytm)
admin.site.register(razorpay)
admin.site.register(SocialLinks)
admin.site.register(FoundingTeam)
