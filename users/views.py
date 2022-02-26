from rest_framework import permissions
from rest_framework.views import APIView
from .serializers import *
from .models import *
from rest_framework.response import Response
from rest_framework.exceptions import ValidationError
from rest_framework import status
from django.contrib.auth import get_user_model
from django_tenants.utils import schema_context
from .token import get_tokens_for_user
from threading import Thread
from random import *
from main.models import *
import requests
from django.views.decorators.csrf import csrf_exempt

User = Founder


def sendotp(user):
    print(user, "jjjjjjjjjjjjjjjjjjjjjjjjiiiiii")
    try:
        otp = OTP.objects.filter(receiver=user)
    except(TypeError, ValueError, OverflowError, OTP.DoesNotExist):
        otp = None

    if otp is not None:
        otp.delete()

    # otp = randint(1000, 9999)
    otp = 9996
    data = OTP.objects.create(otp=otp, receiver=user)
    data.save()
    # YOUR_AUTH_KEY="m67JEb9QGH8hLPf0KMC3alqzWjFBrIS5sVRZwONDxvdc1ni2XYGUdZh3ToK02ysS6xD5ezMHCicfXYNF"
    # url = "https://www.fast2sms.com/dev/bulk"
    #
    # payload="sender_id=WOFOCR&language=english&route=qt&numbers="+str(user.phone_number)+"&message=16920&variables={#EE#}|{#AA#}&variables_values="+str(user.name)+"|"+str(otp)
    # headers = {
    #     'authorization': YOUR_AUTH_KEY,
    #     'Content-Type': "application/x-www-form-urlencoded",
    #     'Cache-Control': "no-cache",
    # }
    # response = requests.request("POST", url, data=payload, headers=headers)


class AdminLoginView(APIView):
    """
    Login for admin.
    """

    serializer_class = AdminLoginSerializer
    permission_classes = (permissions.AllowAny,)


    def post(self, request):
        serializer = AdminLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone_number = serializer.validated_data['phone_number']
        password = serializer.validated_data['password']
        user = User.objects.get(phone_number=phone_number)
        if user.check_password(password):
            refresh, access = get_tokens_for_user(user)
            return Response({'message': 'Successful', 'refresh': refresh, 'access': access},
                            status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)

class AdminForgetPasswordView(APIView):
    serializer_class = AdminForgetPasswordSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = AdminForgetPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone_number = serializer.validated_data['phone_number']
        user = User.objects.get(phone_number=phone_number, admin=True)
        msg_thread = Thread(target=sendotp, args=(user,))
        msg_thread.start()
        return Response({'info': 'successful! Otp sent', 'user_id': user.id, 'name': user.name},
                        status=status.HTTP_201_CREATED)


class AdminResetPasswordView(APIView):
    serializer_class = AdminResetPasswordSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, user_id, *args, **kwargs):
        serializer = AdminResetPasswordSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        otp = serializer.validated_data['otp']
        new_password = serializer.validated_data['new_password']
        try:
            admin_user_obj = User.objects.get(id=user_id, admin=True)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            admin_user_obj = None
        try:
            admin_user_otp = OTP.objects.get(receiver=user_id)
        except(TypeError, ValueError, OverflowError, OTP.DoesNotExist):
            admin_user_otp = None

        if admin_user_obj is None or admin_user_otp is None:
            raise ValidationError({'error': 'you are not a valid user'})
        else:
            if str(admin_user_otp.otp) == str(otp):
                admin_user_obj.set_password(new_password)
                admin_user_obj.save()
                admin_user_otp.delete()
                return Response({'message': 'Successful', })
            else:
                raise ValidationError({'error': 'Invalid OTP'})


