from django_tenants.middleware.main import TenantMainMiddleware


class TenantMiddleware(TenantMainMiddleware):

    def get_tenant(self, domain_model, hostname):
        tenant = super().get_tenant(domain_model, hostname)
        if not tenant.is_active:
            raise self.TENANT_NOT_FOUND_EXCEPTION("Tenant is inactive")
        return tenant
