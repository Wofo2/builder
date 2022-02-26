from rest_framework import permissions
from rest_framework.views import APIView
from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework import status
from django.contrib.auth import get_user_model
from django_tenants.utils import schema_context
from threading import Thread
from random import *
import requests
from users.models import Founder
from .cloudflare import *
from django.shortcuts import render
from builder.settings import dns_email, dns_api_key, dns_domain, dns_ip_addrees
from django_tenants.utils import remove_www
from django.views.generic import TemplateView
from .permissions import IsAdminOrReadOnly

User = Founder

cf = CloudFlare(dns_email, dns_api_key, dns_domain)


class createCompany(APIView):
    serializer_class = CompanySerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):

        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            schema_name = serializer.validated_data['schema_name']
            username= serializer.validated_data['username']
            phone_number = serializer.validated_data['phone_number']
            password = serializer.validated_data['password']
            tenant = Company.objects.create(schema_name=schema_name, username=username)
            tenant.is_active = True
            tenant.live = True
            tenant.save()
            domain = Domain()
            # domain.domain = schema_name + '.wofo24.com'
            domain.domain = schema_name + '.'+str(request.get_host())

            domain.tenant = tenant
            domain.is_primary = True
            domain.save()

            #creating DNS Record
            sub_domain = schema_name +'.'+dns_domain
            cf.create_record('A', sub_domain, dns_ip_addrees)



            with schema_context(schema_name):
                try:
                    user_exist = User.objects.filtter(phone_number = phone_number)
                except:
                    user_exist = None

                if user_exist:
                    user_exist.delete()

                User.objects.create_superuser(phone_number=phone_number, name=username, password=password)
            return Response({'info': 'Successfully signed-up'}, status=status.HTTP_201_CREATED)
        raise ValidationError({'error': 'something bad happens'})



class Home(TemplateView):
    def get(self, request, *args, **kwargs):
        hostname_without_port = remove_www(request.get_host().split(':')[0])
        domain = Domain.objects.get(domain=hostname_without_port)
        domainN = str(hostname_without_port)
        if domainN == 'http://ec2-3-18-111-249.us-east-2.compute.amazonaws.com':
            template = 'landing.html'
        else:
            template = domain.tenant.company_template.rendertemp
        return render(request, template )

