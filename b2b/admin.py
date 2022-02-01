from django.contrib import admin
from django_tenants.admin import TenantAdminMixin
from .models import Company, Domain

class DomainInline(admin.TabularInline):
    model = Domain
    max_num = 1

@admin.register(Company)
class TenantAdmin(TenantAdminMixin, admin.ModelAdmin):
        list_display = (
        "is_active",
        "created_on",
        )
        inlines = [DomainInline]


