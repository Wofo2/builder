from django.db import models
from users.models import Founder as User
from b2b.models import Company
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
from datetime import datetime

class CompanyDetails(models.Model):
    company = models.OneToOneField(Company, on_delete=models.CASCADE, related_name='company_details')
    logo = models.ImageField(upload_to="logo", default="")
    tittle = models.CharField(null=True, blank=True, default="", max_length=20)
    favicon = models.ImageField(upload_to="favicon", default="")
    about = models.TextField(default=" ", null=True, blank=True)
    address = models.TextField(default=" ", null=True, blank=True)
    mobile_number1 = models.CharField(unique=True, max_length=13, default="")
    mobile_number2 = models.CharField(unique=True, max_length=13, default="")

    def __str__(self):
        return str(self.company)

class CompanyOperation(models.Model):
    company = models.OneToOneField(Company, on_delete=models.CASCADE, related_name='company_operation')
    cod = models.BooleanField(default=False)
    offline_payment = models.BooleanField(default=False)
    paytm = models.BooleanField(default=False)

    def __str__(self):
        return 'company operation'


class Paytm(models.Model):
    company_operation = models.OneToOneField(CompanyOperation, on_delete=models.CASCADE, related_name='company_operations_paytm')
    merchant_id = models.CharField(null=True, blank=True, default="",max_length=50)
    merchant_key = models.CharField(null=True, blank=True, default="", max_length=50)
    merchant_web = models.CharField(null=True, blank=True, default="", max_length=50)
    industry_type_id = models.CharField(null=True, blank=True, default="", max_length=50)

class razorpay(models.Model):
    company_operation = models.OneToOneField(CompanyOperation, on_delete=models.CASCADE, related_name='company_operations_razorpay')
    payment_link = models.CharField(null=True, blank=True, default="",max_length=50)


class SocialLinks(models.Model):
    company = models.OneToOneField(Company, on_delete=models.CASCADE, related_name='social_links')
    facebook = models.CharField(null=True, blank=True, default="",max_length=50)
    instagram = models.CharField(null=True, blank=True, default="", max_length=50)
    twitter = models.CharField(null=True, blank=True, default="", max_length=50)
    whatsapp = models.CharField(null=True, blank=True, default="", max_length=10)

    def __str__(self):
        return 'Social Links'


class FoundingTeam(models.Model):
    name = models.CharField(null=False, blank=False, max_length=40)
    images = models.ImageField(upload_to="Subcategory_Icons")
    about = models.TextField(default=" ", null=True, blank=True)
    title = models.CharField(null=False, blank=False, max_length=40)
    linkedin = models.CharField(null=False, blank=False, max_length=60)
    instagram = models.CharField(null=False, blank=False, max_length=60)
    twitter = models.CharField(null=False, blank=False, max_length=60)
    email = models.CharField(null=False, blank=False, max_length=60)

    def __str__(self):
        return self.name




class OTPs(models.Model):
    """
    Model to store Otp of user And verify user.
    """
    receiver = models.OneToOneField(User, on_delete=models.CASCADE)
    otp = models.IntegerField(null=False, blank=False)
    sent_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s has received otps: %s" % (self.receiver.phone_number, self.otp)


class UserAddress(models.Model):
    """
    Model for storing multiple address of user.
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    house_no = models.TextField(default=" ", null=True, blank=True)
    street = models.TextField(default=" ", null=False, blank=False)
    city = models.TextField(default=" ", null=False, blank=False)
    postal_code = models.CharField(null=True, blank=True, default="",max_length=6)
    state = models.TextField(null=False, blank=False)

    def __str__(self):
        return "Address of %s" % (self.user.name,)



class Category(models.Model):
    """
    Model for Category of the services
    """
    category = models.CharField(unique=True, max_length=50, null=False, blank=False)
    icon = models.ImageField(null=False, blank=False, upload_to='Category_Icon')
    wallpaper = models.ImageField(null=False, blank=False,default=" ", upload_to='Category_Wallpaper')
    status = models.BooleanField(default=True)

    def __str__(self):
        return self.category


class SubCategory(models.Model):
    """
    Each Subcategory is related to Category
    """
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory = models.CharField(max_length=100, null=False, blank=False)
    icon = models.ImageField(upload_to="Subcategory_Icons")
    status = models.BooleanField(default=True, null=True, blank=True)

    class Meta:
        unique_together = ('category', 'subcategory',)

    def __str__(self):
        return self.subcategory


class Professionals(models.Model):
    subcategory = models.ManyToManyField(SubCategory,null=True,blank=True)
    name = models.CharField(max_length=100, null=False, blank=False)
    photo = models.ImageField(upload_to='Professionals_photo')
    service_charge = models.CharField(null=True,blank=True, max_length=10)
    job_completed = models.IntegerField(default=0)
    contact_number1 = models.CharField(null=False, blank=False, max_length=13)
    contact_number2 = models.CharField(null=True, blank=True, max_length=13)
    address = models.TextField(default=" ", null=True, blank=True)
    joining_date = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.name


STATUS_CHOICE = (
    ('Pending', 'Pending'),
    ('Accepted', 'Accepted'),
    ('Cancelled', 'Cancelled'),
    ('Declined', 'Declined'),
    ('Completed', 'Completed')
)


class ServiceOrder(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(blank=False, null=False)
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    professional_assigned = models.ForeignKey(Professionals, on_delete=models.SET_NULL,null=True,blank=False)
    response = models.TextField(blank=True, null=True)
    time = models.DateTimeField(auto_now_add=True)
    service_time = models.CharField(null=True, blank=True, max_length=50)
    service_status = models.CharField(choices=STATUS_CHOICE, max_length=100,null=True, blank=True)
    payment_status = models.BooleanField(default=False)

    def __str__(self):
        return self.user.phone_number + "ordered" + self.subcategory.category.category + " for " + self.subcategory.subcategory


TYPE_SELECT = (
    ('single', 'Single Correct'),
    ('multi', 'Multi Correct'),
    ('form', 'Form')
)

class Questions(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
    question = models.TextField(max_length=2000)
    select_type = models.CharField(choices=TYPE_SELECT, max_length=50)
    required = models.BooleanField(default=False)
    parent_question = models.IntegerField(null=True, blank=True)
    parent_option = models.CharField(null=True, blank=True,max_length=100)

    def __str__(self):
        return str(self.question)


class Options(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    child_question = models.IntegerField(default=0, null=True,blank=True)
    choice = models.CharField(max_length=500, null=False, blank=False)

    def __str__(self):
        return str(self.question.question) + " -> "+str(self.choice)


class ValueOption(models.Model):
    question = models.ForeignKey(Questions, on_delete=models.CASCADE)
    choice = models.CharField(max_length=500, null=False, blank=False)
    factor = models.FloatField(default=1.0)
    price = models.FloatField(default=0.0)

    def __str__(self):
        return str(self.question.question) + " -> "+str(self.choice)

