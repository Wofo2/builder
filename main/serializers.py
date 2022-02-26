from rest_framework import serializers
from django.contrib.auth import get_user_model
from users.serializers import *
import re
from django.core.validators import RegexValidator
from rest_framework.exceptions import ValidationError
from rest_framework.validators import UniqueValidator
from .models import *
import re
from users.models import OTP

User = get_user_model()


class CompanyDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = CompanyDetails
        fields = '__all__'


class OTPSerializer(serializers.ModelSerializer):
    """
    serializer for otp
    """

    class Meta:
        model = OTP
        fields = ['otp']

    def validate(self, data):
        otp = data.get('otp')
        if len(str(otp)) != 4:
            raise ValidationError({"error":"Invalid OTP"})
        else:
            return data

class LoginSerializer(serializers.ModelSerializer):
    """serializer for Login using otp"""
    phone_number = serializers.CharField(validators=None)

    class Meta:
        model = User
        fields = ['phone_number', ]

    def validate(self,data):
        phone_number = data.get('phone_number')
        if phone_number:
            phone_regex = "^[6789]\d{9}$"
            phone_valid = re.compile(phone_regex)
        if not phone_valid.match(phone_number):
            raise ValidationError({"error": "Invalid Phone number"})
        try:
            user = User.objects.get(phone_number=phone_number)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        if not user or user is None:
            raise ValidationError({'error': "Phone number doesn't exist"})
        return data



class UserSignupSerializer(serializers.ModelSerializer):
    phone_number = serializers.CharField(required=True, allow_blank=False, allow_null=False,)
    name = serializers.CharField(required=True, allow_null=False, allow_blank=False)

    class Meta:
        model = User
        fields = ('phone_number', 'name')

    def validate(self, data):
        phone = data.get('phone_number')
        try:
            phone_number = User.objects.filter(phone_number=phone)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            phone_number=None
        if phone_number:
            raise ValidationError({"error": "phone number already exists"})
        if phone:
            phone_regex = "^[6789]\d{9}$"
            phone_valid = re.compile(phone_regex)
            if not phone_valid.match(phone):
                raise ValidationError({"error": "Invalid Phone number"})
            else:
                return data
        raise ValidationError({"error": "Invalid Phone number"})

class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'phone_number', 'name', 'date_joined')
        # fields='__all__'


class UserAddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAddress
        fields = '__all__'
        read_only_fields = ('user',)

    def validate(self, data):
        regex = r"^[1-9][0-9]{5}$"
        pincode = data.get('postal_code')
        if re.match(regex, pincode):
            return data
        raise ValidationError({"error": "Invalid pincode   "})



class AdminLoginSerializer(serializers.ModelSerializer):
    phone_number = serializers.CharField(validators=None)
    password = serializers.CharField(
        style={'input_type': 'password'}
    )

    class Meta:
        model = User
        fields = ['phone_number', 'password']

    def validate(self, data):
        phone_number = data.get('phone_number')
        try:
            user = User.objects.get(phone_number=phone_number, admin=True)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        if not user:
            raise ValidationError({'error': "Entry restricted, Not an admin"})
        return data


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        read_only_fields = ('status',)


class AddSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = '__all__'
        read_only_fields = ('status',)


class ListSubCategorySerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = SubCategory
        fields = '__all__'


class AddProfessionalSerializer(serializers.ModelSerializer):
    subcategory_list = serializers.CharField(required=False, write_only=True)

    class Meta:
        model = Professionals
        fields = '__all__'
        read_only_fields = ('joining_date', 'job_assigned')
        write_only_fields = ('subcategory_list',)

    def validate(self, data):
        phone_number_regex = r"^[6-9]\d{9}$"
        number_regex = re.compile(phone_number_regex)
        contact1 = data.get('contact_number1')
        contact2 = data.get('contact_number2')
        if contact1 is not None:
            if not number_regex.match(contact1):
                raise ValidationError("Invalid Phone Number 1")
        if contact2 is not None and contact2 != '':
            if not number_regex.match(contact2):
                raise ValidationError("Invalid Phone Number 2")
        return data


class ListProfessionalSerializer(serializers.ModelSerializer):
    subcategory = ListSubCategorySerializer(many=True)

    class Meta:
        model = Professionals
        fields = '__all__'


class ServiceOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceOrder
        fields = '__all__'
        read_only_fields = ('user', 'time',)


class RetrieveOrderSerializer(serializers.ModelSerializer):
    user = UserSignupSerializer()
    subcategory = ListSubCategorySerializer()
    professional_assigned = ListProfessionalSerializer()

    class Meta:
        model = ServiceOrder
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'


class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Options
        fields = '__all__'
        read_only_fields = ('child_question',)


class ValueOptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ValueOption
        fields = '__all__'
        # read_only_fields = ('amount', )


class MyOrderSerializer(serializers.ModelSerializer):
    subcategory = ListSubCategorySerializer()

    class Meta:
        model = ServiceOrder
        fields = '__all__'


class ContactUsSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255, allow_blank=True, allow_null=True)
    email = serializers.CharField(max_length=255, allow_null=False, allow_blank=False)
    phone_number = serializers.CharField(max_length=13, allow_blank=True, allow_null=True)
    message = serializers.CharField(max_length=2000, allow_null=False, allow_blank=False)

    def validate(self, data):
        phone_number_regex = r"^[6-9]\d{9}$"
        email_regex = r'^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
        number_regex_obj = re.compile(phone_number_regex)
        email_regex_obj = re.compile(email_regex)
        contact = data.get('phone_number')
        email = data.get('email')
        if contact is not None and contact != '':
            if not number_regex_obj.match(contact):
                raise ValidationError("Invalid Phone Number")
        if email and email != '':
            if not email_regex_obj.match(email):
                raise ValidationError("Invalid email")
        return data


class BulkMessageSentSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=500)


class AppSerializer(serializers.Serializer):
    phone_number = serializers.CharField(max_length=13, allow_blank=False, allow_null=False)

    def validate(self, data):
        phone_number_regex = r"^[6-9]\d{9}$"
        number_regex_obj = re.compile(phone_number_regex)
        contact = data.get('phone_number')
        if contact is not None and contact != '':
            if not number_regex_obj.match(contact):
                raise ValidationError("Invalid Phone Number")
        return data


class AdminForgetPasswordSerializer(serializers.ModelSerializer):
    phone_number = serializers.CharField(validators=None)

    class Meta:
        model = User
        fields = ['phone_number', ]

    def validate(self, data):
        phone_number = data.get('phone_number')
        if phone_number:
            phone_regex = "^[6789]\d{9}$"
            phone_valid = re.compile(phone_regex)
        if not phone_valid.match(phone_number):
            raise ValidationError({"error": "Invalid Phone number"})
        try:
            user = User.objects.get(phone_number=phone_number, admin=True)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        if not user or user is None:
            raise ValidationError({'error': "Not an Admin User"})
        return data



class AdminLoginSerializer(serializers.ModelSerializer):

    phone_number = serializers.CharField(validators=None)
    password = serializers.CharField(
        style={'input_type': 'password'}
    )

    class Meta:
        model = User
        fields = ['phone_number', 'password']

    def validate(self, data):
        phone_number = data.get('phone_number')
        try:
            user = User.objects.get(phone_number=phone_number, admin=True)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        if not user:
            raise ValidationError({'error': "Entry restricted, Not an admin"})
        return data



class AdminForgetPasswordSerializer(serializers.ModelSerializer):
    phone_number = serializers.CharField(validators=None)

    class Meta:
        model = User
        fields = ['phone_number', ]

    def validate(self,data):
        phone_number = data.get('phone_number')
        if phone_number:
            phone_regex = "^[6789]\d{9}$"
            phone_valid = re.compile(phone_regex)
        if not phone_valid.match(phone_number):
            raise ValidationError({"error": "Invalid Phone number"})
        try:
            user = User.objects.get(phone_number=phone_number, admin=True)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        if not user or user is None:
            raise ValidationError({'error': "Not an Admin User"})
        return data

class AdminResetPasswordSerializer(serializers.ModelSerializer):

    new_password = serializers.CharField(
        style={'input_type': 'password'}
    )
    confirm_password = serializers.CharField(
        style={'input_type': 'password'}
    )
    class Meta:
        model = OTP
        fields = ['otp', 'new_password', 'confirm_password',]

    def validate(self, data):
        otp = data.get('otp')
        new_password = data.get('new_password')
        confirm_password = data.get('confirm_password')
        print(new_password)
        print(confirm_password)
        if len(str(otp)) != 4:
            raise ValidationError({"error":"Invalid OTP"})
        else:
            if new_password != confirm_password:
                raise ValidationError({"error":"Passwords don't match"})
            else:
                return data


class OTPSerializer(serializers.ModelSerializer):

    class Meta:
        model = OTP
        fields = ['otp']

    def validate(self, data):
        otp = data.get('otp')
        if len(str(otp)) != 4:
            raise ValidationError({"error":"Invalid OTP"})
        else:
            return data