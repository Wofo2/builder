from django.contrib.auth.models import BaseUserManager


class PhoneNumberUserManager(BaseUserManager):
    use_in_migrations = True

    def create_user(self, phone_number, name, password=None):

        if not phone_number:
            raise ValueError('The given phone number must be set')
        user = self.model(
            phone_number=phone_number, name=name)
        user.set_password(password)
        user.active = False
        user.save(using=self._db)
        return user

    def create_superuser(self, phone_number, name, password):
        user = self.create_user(
            phone_number,
            name,
        )
        user.set_password(password)
        user.active = True
        user.staff = True
        user.admin = True
        user.save(using=self._db)
        return user
