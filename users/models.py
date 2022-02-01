from django.db import models
from django.contrib.auth.base_user import AbstractBaseUser
from .manager import PhoneNumberUserManager
from django.utils import timezone

class Founder(AbstractBaseUser):
    phone_number = models.CharField(unique=True, max_length=13)
    name = models.CharField(max_length=255, blank=False, null=False)
    objects = PhoneNumberUserManager()
    active = models.BooleanField(default=False)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    USERNAME_FIELD = 'phone_number'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        # The user is identified by their email address
        return self.phone_number

    def get_short_name(self):
        # The user is identified by their email address
        return str(self.phone_number)

    def __str__(self):              # __unicode__ on Python 2
        return str(self.name)+' ('+str(self.phone_number)+')'

    def has_perm(self, perm, obj=None):
        """Does the user have a specific permission?"""
        # Simplest possible answer: Yes, always
        return True

    def has_module_perms(self, app_label):
        """Does the user have permissions to view the app `app_label`?"""
        return True

    @property
    def is_staff(self):
        """Is the user a member of staff?"""
        return self.staff

    @property
    def is_admin(self):
        """Is the user a admin member?"""
        return self.admin

    @property
    def is_active(self):
        """Is the user active?"""
        return self.active



class OTP(models.Model):
    """
    Model to store Otp of user And verify user.
    """
    receiver = models.OneToOneField(Founder, on_delete=models.CASCADE, db_constraint=False)
    otp = models.IntegerField(null=False, blank=False)
    sent_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "%s has received otps: %s" % (self.receiver.phone_number, self.otp)

