from rest_framework.views import APIView
from .models import *
from rest_framework import permissions, status
from .serializers import *
from rest_framework.response import Response
from .permissions import *
from random import *

from django.utils import timezone
from datetime import timedelta
from django.contrib.auth import login, logout
from rest_framework import generics, viewsets, mixins
from rest_framework.decorators import action
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, filters
from rest_framework.exceptions import ValidationError
from django.db.models import Q
from rest_framework.renderers import TemplateHTMLRenderer
from django.shortcuts import render
import json
from threading import Thread
from .token import get_tokens_for_user
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from .permissions import *
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.core.mail import send_mail
from builder.settings import EMAIL_HOST_USER, EMAIL_RECEIVER_USER
from django.utils.html import strip_tags
from .notifications import notify
from django_tenants.utils import remove_www
from b2b.models import Domain
from users.views import sendotp

months = {
    '01': 'Jan',
    '02': 'Feb',
    '03': 'Mar',
    '04': 'Apr',
    '05': 'May',
    '06': 'Jun',
    '07': 'Jul',
    '08': 'Aug',
    '09': 'Sep',
    '10': 'Oct',
    '11': 'Nov',
    '12': 'Dec',
}


class CompanyDetailsView(APIView):
    serializer_class = CompanyDetailsSerializer
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        hostname_without_port = remove_www(request.get_host().split(':')[0])
        domain = Domain.objects.get(domain=hostname_without_port)
        logo = domain.tenant.company_details.logo.url
        favicon = domain.tenant.company_details.favicon.url
        about = domain.tenant.company_details.about
        address = domain.tenant.company_details.address
        mobile_number1 = domain.tenant.company_details.mobile_number1

        try:
            facebook = domain.tenant.social_links.facebook
        except:
            facebook = None

        try:
            instagram = domain.tenant.social_links.instagram
        except:
            instagram = None

        try:
            twitter = domain.tenant.social_links.twitter
        except:
            twitter = None

        try:
            whatsapp = domain.tenant.social_links.whatsapp
        except:
            whatsapp = None


        social_limks = {'facebook':facebook,
                        'instagram': instagram,
                        'twitter': twitter,
                        'whatsapp': whatsapp,
                        }

        cod = domain.tenant.company_operation.cod
        offline_payment = domain.tenant.company_operation.offline_payment
        paytm = domain.tenant.company_operation.paytm

        return Response({'message': 'successfully logged out', 'logo': logo, 'cod':cod, 'social_limks':social_limks },
                        status=status.HTTP_200_OK)




class Signup(APIView):
    """
    View for sign up.
    """
    serializer_class = UserSignupSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):

        serializer = UserSignupSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            phone_number = serializer.validated_data['phone_number']
            name = serializer.validated_data['name']
            user = User.objects.create_user(phone_number=phone_number, name=name)
            msg_thread = Thread(target=sendotp,args=(user,))
            msg_thread.start()
            user.save()
            return Response({'info': 'Successfully signed-up', 'user_id': user.id, 'name': name}, status=status.HTTP_201_CREATED)
        raise ValidationError({'error': 'Invalid User'})

#
# class Activate(APIView):
#
#     permission_classes = (permissions.AllowAny,)
#     serializer_class = OTPSerializer
#
#     def post(self, request, user_id,*args,**kwargs):
#         serializer = OTPSerializer(data=request.data)
#         code_otp = request.data['otp']
#         receiver = User.objects.get(id=user_id)
#         print(receiver, "ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppiii")
#         receiver.active = True
#         refresh, access = get_tokens_for_user(receiver)
#         return Response({'message': 'Successful', 'refresh': refresh, 'access': access})


class Activate(APIView):
    """
    Activate verifies the stored otp and the otp entered by user.
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = OTPSerializer

    def post(self, request, user_id,*args,**kwargs):
        serializer = OTPSerializer(data=request.data)
        code_otp = request.data['otp']

        print(code_otp, "code_otp code_otp code_otp code_otp code_otp code_otp")

        try:
            otp = OTP.objects.get(receiver=user_id)
        except(TypeError, ValueError, OverflowError, OTP.DoesNotExist):
            otp = None

        print(otp, "saved ottttpppppppppp")

        try:
            receiver = User.objects.get(id=user_id)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            receiver = None

        print(receiver, 'requested user.......................')

        if otp is None or receiver is None:
            raise ValidationError({'error': 'you are not a valid user'})
        elif timezone.now() - otp.sent_on >= timedelta(days=0, hours=0, minutes=1, seconds=0):
            # otp.delete()
            raise ValidationError({'error': 'OTP expired!'})

        if str(otp.otp) == str(code_otp):
            if receiver.active is False:
                serializer.is_valid(raise_exception=True)
                receiver.active = True
                receiver.save()
            otp.delete()
            refresh, access = get_tokens_for_user(receiver)
            return Response({'message': 'Successful', 'refresh': refresh, 'access': access})
        else:
            raise ValidationError({'error': 'Invalid OTP'})

class LoginView(APIView):
    """
    Used for logging in.
    """
    serializer_class = LoginSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone_number = serializer.validated_data['phone_number']
        user = User.objects.get(phone_number=phone_number)
        msg_thread = Thread(target=sendotp,args=(user,))
        msg_thread.start()
        return Response({'info': 'successful! Otp sent', 'user_id': user.id, 'name': user.name}, status=status.HTTP_201_CREATED)


class ProfileView(APIView):
    """
    Profile View of User.
    """
    serializer_class = UserSignupSerializer
    permission_classes = (permissions.AllowAny, permissions.IsAuthenticated)

    def get(self, request, *args, **kwargs):
        try:
            user_id = self.request.user.id
            user = User.objects.get(id=user_id)
        except(TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None
        if user:
            serializer = UserSignupSerializer(data={"phone_number": user.phone_number, "name": user.name})
            serializer.is_valid()
            return Response(serializer.data)
        raise ValidationError({'error': 'Not a valid user'})


class UserDetailView(viewsets.ModelViewSet):
    """
    View for Details of all the users for admin.
    """
    serializer_class = UserDetailSerializer
    permission_classes = (permissions.IsAuthenticated,)
    queryset = User.objects.filter(active=True)

    def list(self, request, *args, **kwargs):
        users = User.objects.filter(Q(active=True) & Q(admin=False))
        serializer = UserDetailSerializer(data=users, many=True)
        serializer.is_valid()
        for data in serializer.data:
            data['date_joined'] = CalculateDateTime(data['date_joined'])
        return Response(serializer.data)




class UserAddressView(viewsets.ModelViewSet):
    """
    View for handling User's address i.e CRUD.
    """
    serializer_class = UserAddressSerializer
    permission_classes = (permissions.IsAuthenticated, IsUser)
    queryset = UserAddress.objects.all()

    def list(self, request):
        queryset = UserAddress.objects.filter(user=request.user.id)
        serializer = UserAddressSerializer(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        user = self.request.user
        count = UserAddress.objects.filter(user=user).count()
        if count == 2:
            raise ValidationError({'error': "Not Allowed"})
        serializer.is_valid(raise_exception=True)
        serializer.save(user=self.request.user)


class LogoutView(APIView):
    """
    logout view.Only authenticated user can access this url(by default)

    """

    def get(self, request, *args, **kwargs):
        logout(request)
        return Response({'message': 'successfully logged out'},
                        status=status.HTTP_200_OK)


class CategoryView(viewsets.ModelViewSet):
    """
    This View is for CRUD of Categroy.
    """
    serializer_class = CategorySerializer
    queryset = Category.objects.all()
    permission_classes = (permissions.AllowAny, IsAdminOrReadOnly)


class SubCategoryView(viewsets.ModelViewSet):
    """
    This is view for CRUD of Subcategory.
    """
    serializer_class = ListSubCategorySerializer
    queryset = SubCategory.objects.all().order_by('id')
    permission_classes = (permissions.AllowAny, IsAdminOrReadOnly)
    filter_backends = (filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter)
    search_fields = ('category__category', 'subcategory')
    filter_fields = ('category',)

    def get_serializer_class(self):
        if self.action == 'create' or self.action == 'update':
            return AddSubCategorySerializer
        return ListSubCategorySerializer

    @action(methods=['GET'], detail=True)
    def questions(self, request, *args, **kwargs):
        """
          Provides the all the questions of a subcategory.
        """
        try:
            subcategory = SubCategory.objects.get(id=self.kwargs['pk'])
        except(TypeError, ValueError, OverflowError, SubCategory.DoesNotExist):
            subcategory = None
        if subcategory:
            all_question = Questions.objects.filter(subcategory=subcategory).order_by('id')
            question_serializer = QuestionSerializer(data=all_question, many=True)
            question_serializer.is_valid()
            for question in question_serializer.data:
                if question['select_type'] != 'form':
                    options = Options.objects.filter(question=question['id']).order_by('id')
                    option_serializer = OptionSerializer(data=options, many=True)
                    option_serializer.is_valid()
                    question['options'] = option_serializer.data
                    question['subcategory_name'] = subcategory.subcategory
                else:
                    options = ValueOption.objects.filter(question=question['id']).order_by('id')
                    option_serializer = ValueOptionSerializer(data=options, many=True)
                    option_serializer.is_valid()
                    question['options'] = option_serializer.data
                    question['subcategory_name'] = subcategory.subcategory
            return Response(question_serializer.data)
        raise ValidationError({'error': "Invalid"})


class ProfessionalView(viewsets.ModelViewSet):
    """
    This view acts as a profile of Professionals and provide CRUD facility to admin.
    """
    serializer_class = AddProfessionalSerializer
    queryset = Professionals.objects.all()
    permission_classes = (permissions.AllowAny, IsAdminOrReadOnly)
    filter_backends = (filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter)
    search_fields = ('subcategory',)
    filter_fields = ('subcategory', 'subcategory__category',)
    ordering_fields = ('joining_date',)

    def get_serializer_class(self):
        if self.action == 'create' or self.action == 'update':
            return AddProfessionalSerializer
        return ListProfessionalSerializer

    def string_to_list(self, s):
        s = s.split(',')
        l = []
        for i in s:
            l.append(int(i))
        return l

    def create(self, request, *args, **kwargs):
        if request.data['subcategory_list']:
            subcategory_list = self.string_to_list(request.data['subcategory_list'])
        else:
            subcategory_list = None
        serializer = AddProfessionalSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        new_data = {
            'name': serializer.validated_data['name'],
            'photo': serializer.validated_data['photo'],
            'service_charge': serializer.validated_data['service_charge'],
            'contact_number1': serializer.validated_data['contact_number1'],
            'contact_number2': serializer.validated_data['contact_number2'],
            'address': serializer.validated_data['address'],
        }
        professional = Professionals.objects.create(**new_data)
        if subcategory_list is not None:
            for i in subcategory_list:
                subcat = SubCategory.objects.get(pk=i)
                professional.subcategory.add(subcat)
        return Response({'info': 'created'})

    def update(self, request, *args, **kwargs):
        professional = Professionals.objects.get(pk=self.kwargs['pk'])
        new_data = {
            'name': request.data['name'],
            'service_charge': request.data['service_charge'],
            'contact_number1': request.data['contact_number1'],
            'contact_number2': request.data['contact_number2'],
            'address': request.data['address'],
        }
        try:
            photo = request.data['photo']
        except(TypeError, ValueError, OverflowError, KeyError):
            photo = None
        if photo:
            new_data['photo'] = photo
        if request.data['subcategory_list']:
            subcategory_list = self.string_to_list(request.data['subcategory_list'])
        else:
            subcategory_list = None
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=new_data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        if subcategory_list:
            for i in subcategory_list:
                subcat = SubCategory.objects.get(pk=i)
                professional.subcategory.add(subcat)
        return Response({'info': "updated"})


class QuestionView(viewsets.ModelViewSet):
    """
    Provides the required question and performs the interlinking of Questions with Parent option.
    """
    serializer_class = QuestionSerializer
    queryset = Questions.objects.all().order_by('id')
    permission_classes = (permissions.AllowAny, IsAdminOrReadOnly)
    filter_backends = (filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('subcategory_id', 'parent_question')

    def perform_create(self, serializer):
        parent = serializer.validated_data['parent_question']
        if parent is None:
            serializer.save()
        else:
            try:
                parent_question = Questions.objects.get(id=parent)
            except(TypeError, ValueError, OverflowError, Questions.DoesNotExist):
                parent_question = None
            if parent_question:
                x = serializer.save()
                parent_option = serializer.validated_data['parent_option']
                parent_option = json.loads(parent_option)
                print(parent_option)
                for option in parent_option:
                    option_related = Options.objects.get(id=int(option))
                    option_related.child_question = x.id
                    option_related.save()
            else:
                raise ValidationError({'error': "Invalid Procedure"})

    def destroy(self, request, *args, **kwargs):
        question = Questions.objects.get(pk=self.kwargs['pk'])
        parent_options = Options.objects.filter(child_question=question.id)
        for option in parent_options:
            option.child_question = 0
            option.save()
        question.delete()

    def update(self, request, *args, **kwargs):
        question = Questions.objects.get(pk=self.kwargs['pk'])
        parent_option = question.parent_option
        if parent_option is not None:
            parent_option = parent_option.split(',')
            print(parent_option)
            for option in parent_option:
                option_related = Options.objects.get(id=int(option))
                option_related.child_question = self.kwargs['pk']
                option_related.save()
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)


class OptionView(viewsets.ModelViewSet):
    """
    Provides the option for a question and performs the interlinking of options with child question
    """
    serializer_class = OptionSerializer
    permission_classes = (permissions.AllowAny, IsAdminOrReadOnly)
    queryset = Options.objects.all().order_by('id')
    filter_backends = (filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter)
    filter_fields = ('question_id',)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data, list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(child_question=0)


class ValueOptionView(viewsets.ModelViewSet):
    """
    this view gives the choices for a form.
    """
    serializer_class = ValueOptionSerializer
    permission_classes = (permissions.AllowAny, IsAdminOrReadOnly)
    queryset = ValueOption.objects.all().order_by('id')

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data, many=isinstance(request.data, list))
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class AdminOrderView(APIView):
    """
    this is the home view for admin where he can see recently ordered service.
    """
    queryset = ServiceOrder.objects.all()
    serializer_class = ServiceOrderSerializer
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'test.html'

    def get(self, request):
        pending_orders = ServiceOrder.objects.filter(service_status='pending')
        return render(request, self.template_name, {'pending_orders': pending_orders})


# For channels testing
class UserOrderView(APIView):
    queryset = ServiceOrder.objects.all()
    serializer_class = ServiceOrderSerializer
    permission_classes = (permissions.AllowAny,)
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'test_user.html'

    def get(self, request, id):
        updated_order = ServiceOrder.objects.filter(pk=id)
        print(updated_order)
        return render(request, self.template_name, {'updated_order': updated_order})


def Validate_Response(self, serializer):
    """
    function to validate the response sent by client/User.
    """
    response = serializer.validated_data['response']
    response = json.loads(response)
    dumy_response = {}
    for key, value in response.items():
        if (key != "form"):
            try:
                ques = Questions.objects.get(id=int(key))
            except(TypeError, ValueError, OverflowError, Questions.DoesNotExist):
                ques = None
            if ques:
                option_array = []
                for option in value:
                    try:
                        opt = Options.objects.get(id=int(option))
                    except(TypeError, ValueError, OverflowError, Options.DoesNotExist):
                        opt = None
                    if opt:
                        option_array.append(str(opt.choice))
                    else:
                        raise ValidationError("Not a valid Response")
                dumy_response[str(ques.question)] = option_array
            else:
                raise ValidationError({'error': "Not a valid Response"})
        if key == "form":
            form = {}
            try:
                question = Questions.objects.get(id=int(response[key]['formQuestionId']))
            except(TypeError, ValueError, OverflowError, Questions.DoesNotExist):
                question = None
            if question:
                form["formQuestionId"] = response[key]['formQuestionId']
            else:
                raise ValidationError({'error': "Not a valid Response"})
            total = 0.00
            options = []
            for valued_option, entity in value.items():
                if valued_option != "formQuestionId" and valued_option != "total":
                    try:
                        valued_option_obj = ValueOption.objects.get(id=valued_option)
                    except(TypeError, ValueError, OverflowError, ValueOption.DoesNotExist):
                        valued_option_obj = None
                    if valued_option_obj:
                        choice = {}
                        valued_form = {}
                        choice["choice"] = valued_option_obj.choice
                        valued_form[str(valued_option_obj.choice)] = response[key][valued_option]
                        choice["quantity"] = valued_form[str(valued_option_obj.choice)]["quantity"]
                        choice["price"] = valued_form[str(valued_option_obj.choice)]["price"]
                        if valued_form[str(valued_option_obj.choice)]["quantity"] > 1:
                            choice["cost"] = valued_form[str(valued_option_obj.choice)][
                                                 'quantity'] * valued_option_obj.price * valued_option_obj.factor
                        elif valued_form[str(valued_option_obj.choice)]["quantity"] == 1:
                            choice["cost"] = valued_option_obj.price
                        total += choice["cost"]
                        options.append(choice)

                    else:
                        raise ValidationError({'error': 'Not a valid Response'})
            form["total"] = total
            form["options"] = options
            dumy_response["form"] = form
    dumy_response = json.dumps(dumy_response)
    return dumy_response


class ServiceOrderView(viewsets.ModelViewSet):
    """
    this view is for placing order by user and allows put/patch/delete only to admin
    """
    serializer_class = ServiceOrderSerializer
    queryset = ServiceOrder.objects.all()
    permission_classes = (permissions.IsAuthenticated, IsadminOrIsOwner)  # add a permission for IsadminOrIsOwner
    ordering_fields = ('time',)

    def perform_create(self, serializer):
        serializer.is_valid(raise_exception=True)
        print(serializer.validated_data['response'])
        serializer.validated_data['response'] = Validate_Response(self, serializer)
        serializer.save(user=self.request.user, service_status="Pending",
                        payment_status=False, professional_assigned=None)

    def retrieve(self, request, *args, **kwargs):
        """
        json laods the 'response' field of a order in admin/user view.
        """
        instance = self.get_object()
        try:
            order = ServiceOrder.objects.filter(pk=instance.id)
        except(TypeError, ValueError, OverflowError, ServiceOrder.DoesNotExist):
            order = None
        if order is not None or len(order) != 0:
            serializer = RetrieveOrderSerializer(data=order, many=True, context={'request': request})
            serializer.is_valid()
            serializer.data[0]['response'] = json.loads(serializer.data[0]['response'])
            serializer.data[0]['time'] = CalculateDateTime(serializer.data[0]['time'])
            serializer.data[0]['category'] = serializer.data[0]['subcategory']['category']['category']
            if serializer.data[0]['professional_assigned'] is not None:
                serializer.data[0]['professional_assigned']['joining_date'] = CalculateDateTime(
                    serializer.data[0]['professional_assigned']['joining_date'])
                serializer.data[0]['professional_assigned']['subcategory'] = [i['id'] for i in serializer.data[0][
                    'professional_assigned']['subcategory']]
            return Response(serializer.data)
        raise ValidationError({'info': "Not a Valid order id"})

    def list(self, request, *args, **kwargs):
        """
        json laods the 'response' field of whole queryset in admin/user view.
        """
        queryset = ServiceOrder.objects.all().order_by('time').reverse()
        serializer = RetrieveOrderSerializer(data=queryset, many=True)
        serializer.is_valid()
        for data in serializer.data:
            data['response'] = json.loads(data['response'])
            data['time'] = CalculateDateTime(data['time'])
            data['category'] = data['subcategory']['category']['category']
            if data['professional_assigned']:
                data['professional_assigned'] = data['professional_assigned']['id']
        return Response(serializer.data)

    def update(self, request, *args, **kwargs):
        """
        Updates the Service order using put and patch request.
        """
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        title = "WOFO24"
        if request.user.admin:
            if instance.service_status == 'Pending' and serializer.validated_data['service_status'] == 'Accepted':
                self.perform_update(serializer)
                user_id = instance.user
                message_id = 16845
                service = instance.subcategory.subcategory
                # Sends notification or message
                notification_thread = Thread(target=notify, args=(instance.user, title, message_id, service))
                notification_thread.start()
            elif instance.service_status == 'Accepted' and serializer.validated_data['service_status'] == 'Completed':
                self.perform_update(serializer)
                professional = instance.professional_assigned
                professional.job_completed += 1
                professional.save()
                message_id = 16846
                service = instance.subcategory.subcategory
                # send notification or message
                notification_thread = Thread(target=notify, args=(instance.user, title, message_id, service))
                notification_thread.start()
            elif serializer.validated_data['service_status'] == 'Declined' and instance.service_status == 'Pending':
                self.perform_update(serializer)
                message_id = 16848
                service = instance.subcategory.subcategory
                # send notification or message
                notification_thread = Thread(target=notify, args=(instance.user, title, message_id, service))
                notification_thread.start()
            else:
                return Response({'info': "Can't be processed"})
        elif not request.user.admin:
            if instance.service_status == 'Pending' and serializer.validated_data['service_status'] == "Cancelled":
                self.perform_update(serializer)
                message_id = 16850
                service = instance.subcategory.subcategory
                # send notification or message
                notification_thread = Thread(target=notify, args=(instance.user, title, message_id, service))
                notification_thread.start()
            else:
                return Response({'info': "Can't be processed"})
        else:
            return Response({'info': "Can't be processed"})

        return Response(serializer.data)


def CalculateDateTime(time):
    """
    Function for providing date and time in more readable form.
    """
    date = time.split('T')[0]
    time = time.split('T')[1]
    splitted_date = date.split('-')
    year = splitted_date[0]
    month = months[splitted_date[1]]
    day = splitted_date[2]
    hour = time.split(':')[0]
    minute = time.split(':')[1]
    fulldate = day + " " + month + " " + year + " | " + hour + ":" + minute
    return fulldate


class MyOrderView(APIView):
    """
    Providing order details of the authenticated user.
    """
    serializer_class = MyOrderSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        myorder = ServiceOrder.objects.filter(user=self.request.user).order_by('time').order_by('time').reverse()
        serializer = MyOrderSerializer(data=myorder, many=True)
        serializer.is_valid()
        for data in serializer.data:
            data['category'] = data['subcategory']['category']['category']
            data['time'] = CalculateDateTime(data['time'])
        return Response(serializer.data)


class ContactUsView(APIView):
    """
    Views for sending message for contacting team Wofo24.
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = ContactUsSerializer

    def post(self, request, *args, **kwargs):
        serializer = ContactUsSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # send message to email
        subject = 'Contact Wofo24'
        if serializer.validated_data['name']:
            name = serializer.validated_data['name']
        else:
            name = ''
        if serializer.validated_data['phone_number']:
            phone = serializer.validated_data['phone_number']
        else:
            phone = ''
        email = serializer.validated_data['email']
        message = serializer.validated_data['message']
        context = render_to_string('contact_us.html', {
            'name': name,
            'email': email,
            'phone': phone,
            'message': message,
        })
        from_mail = EMAIL_HOST_USER
        to_mail = [EMAIL_RECEIVER_USER]
        email_thread = Thread(target=send_mail, args=(subject, context, from_mail, to_mail, False))
        email_thread.start()
        return Response({'info': "Thanks, We'll contact back soon"}, status=status.HTTP_201_CREATED)


class CountView(APIView):
    """
    View for counting the Users, Professionals, Orders.
    """
    permission_classes = (permissions.AllowAny,)

    def get(self, request, *args, **kwargs):
        context = {
            'user': User.objects.all().count(),
            'professional': Professionals.objects.all().count(),
            'services': SubCategory.objects.all().count(),
            'order': ServiceOrder.objects.all().count(),
        }
        return Response(context)


class BulkMessageView(APIView):
    """
    View for sending Bulk message.
    """
    serializer_class = BulkMessageSentSerializer
    permission_classes = (permissions.IsAuthenticated, IsAdmin)
    queryset = User.objects.all()

    def post(self, request, *args, **kwargs):
        serializer = BulkMessageSentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        message = serializer.validated_data['message']
        msg_thread = Thread(target=bulkmessage, args=(message,))
        msg_thread.start()
        return Response({'info': 'successful! message sent'}, status=status.HTTP_201_CREATED)


class HireProfessionalView(APIView):
    """
    Hire a professional.
    """
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        professional_id = self.kwargs['id']
        try:
            professional = Professionals.objects.get(id=professional_id)
        except(TypeError, ValueError, OverflowError, Professionals.DoesNotExist):
            professional = None
        if professional:
            # send email
            user = self.request.user
            subject = 'Hire a Professional'
            context = render_to_string('hire_professional.html', {
                'user': user,
                'professional': professional
            })
            from_mail = EMAIL_HOST_USER
            to_mail = [EMAIL_RECEIVER_USER]
            plain_message = strip_tags(context)
            email_thread = Thread(target=send_mail, args=(subject, plain_message, from_mail, to_mail, False))
            email_thread.start()
            return Response({'info': 'Thanks! We will contact you soon.'}, status=status.HTTP_201_CREATED)
        else:
            return Response({'error': "invalid professional or user"})


class AppLinkView(APIView):
    """
    View for sharing the link to Wofo24 app
    """
    permission_classes = (permissions.AllowAny,)
    serializer_class = AppSerializer

    def post(self, request, *args, **kwargs):
        serializer = AppSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        phone_number = request.data['phone_number']
        msg_thread = Thread(target=applink, args=(phone_number,))
        msg_thread.start()
        return Response({'info': 'Link Sent'}, status=status.HTTP_201_CREATED)


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


