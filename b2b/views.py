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
from builder.settings import dns_email, dns_api_key, dns_domain, dns_ip_addrees


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
            domain.domain = schema_name + '.localhost'
            domain.tenant = tenant
            domain.is_primary = True
            domain.save()

            #creating DNS Record
            sub_domain = schema_name +'.'+dns_domain
            cf.create_record('A', sub_domain, dns_ip_addrees)


            with schema_context(schema_name):
                User.objects.create_superuser(phone_number= phone_number, name =username, password=password)
            return Response({'info': 'Successfully signed-up'}, status=status.HTTP_201_CREATED)
        raise ValidationError({'error': 'something bad happens'})

