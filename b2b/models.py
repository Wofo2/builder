from django.db import models
from django_tenants.models import DomainMixin, TenantMixin



class Company(TenantMixin):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=50)
    phone_number = models.TextField(blank=True, null=True)
    live = models.BooleanField(default=False)
    updated_at = models.DateTimeField(auto_now=True, null=True)
    is_active = models.BooleanField(default=False, blank=True)
    created_on = models.DateField(auto_now_add=True)

    auto_create_schema = True
    auto_drop_schema = True


    class Meta:
        ordering = ('-live', '-updated_at')

    def __str__(self):
        return f"{self.username}"


class Domain(DomainMixin):
    pass



templatesx = (
    ('index.html', 'index.html'),
    ('index1.html', 'index1.html')
)

class CompanyTemplate(models.Model):
    company = models.OneToOneField(Company, on_delete=models.CASCADE, related_name='company_template')
    rendertemp = models.CharField(choices=templatesx, null=True, blank=True, max_length=20)