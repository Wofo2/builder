from pathlib import Path
import os
from datetime import timedelta

BASE_DIR = Path(__file__).resolve().parent.parent


SECRET_KEY = 'django-insecure-phah=@#f(p2oy52n%k@0=(_v=)+6by35wgpetcn62#e0*#+r_-'

DEBUG = True

ALLOWED_HOSTS = ['*']
AUTH_USER_MODEL = 'users.Founder'


SHARED_APPS = [

    'django_tenants',  # mandatory
    'b2b',
     'users',
    'rest_framework',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_filters',
    'django_cleanup',
    'corsheaders',
    'rest_framework_swagger',

]

TENANT_APPS = [
    # The following Django contrib apps must be in TENANT_APPS
    'rest_framework',
    'main',
    'tempspace',
    'django.contrib.contenttypes',
    'django.contrib.admin',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django_filters',
    'django_cleanup',
    'corsheaders',
    'rest_framework_swagger',

]



INSTALLED_APPS = list(SHARED_APPS) + [
    app for app in TENANT_APPS if app not in SHARED_APPS
]

CORS_ORIGIN_ALLOW_ALL = True


MIDDLEWARE = [
    'django_tenants.middleware.main.TenantMainMiddleware',
    'builder.middleware.TenantMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django_otp.middleware.OTPMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
]


TENANT_MODEL = "b2b.Company"

TENANT_DOMAIN_MODEL = "b2b.Domain"

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=10),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=10),
    'ROTATE_REFRESH_TOKENS': False,
    'BLACKLIST_AFTER_ROTATION': True,

    'ALGORITHM': 'HS512',
    'SIGNING_KEY': SECRET_KEY,
    'VERIFYING_KEY': None,

    'AUTH_HEADER_TYPES': ('Bearer',),
    'USER_ID_FIELD': 'id',
    'USER_ID_CLAIM': 'user_id',

    'AUTH_TOKEN_CLASSES': ('rest_framework_simplejwt.tokens.AccessToken',),
    'TOKEN_TYPE_CLAIM': 'token_type',

    'JTI_CLAIM': 'jti',

    'SLIDING_TOKEN_REFRESH_EXP_CLAIM': 'refresh_exp',
    'SLIDING_TOKEN_LIFETIME': timedelta(minutes=15),
    'SLIDING_TOKEN_REFRESH_LIFETIME': timedelta(days=2),
}

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.BasicAuthentication',
    ),
    'DEFAULT_FILTER_BACKENDS': ['django_filters.rest_framework.DjangoFilterBackend',],
    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',
    'DEFAULT_PARSER_CLASSES': (
    'rest_framework.parsers.MultiPartParser',
    'rest_framework.parsers.JSONParser',
    'rest_framework.parsers.FormParser',
    )
}




ROOT_URLCONF = 'builder.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'builder.wsgi.application'

DATABASES = {
    'default': {
        'ENGINE': 'django_tenants.postgresql_backend',
        'NAME': 'postgres',
        'USER': 'dbmasteruser',
        'PASSWORD': 'i2[}U&;tN(w)5e%`p2bb8cGIxZx3cxG^',
        'HOST': 'ls-3b94c23191935ebb8aeee9375db066cf22a0fcea.c53n0vmbvp41.ap-south-1.rds.amazonaws.com',
        'PORT': '5432',
        }
}




# DATABASES = {
#     'default': {
#         'ENGINE': 'django_tenants.postgresql_backend',
#         'NAME': 'postgres',
#         'USER': 'dbmasteruser',
#         'PASSWORD': '4tZ1X[3E|.CYOx.TY;K&#s{OmyX?imRF',
#         'HOST': 'ls-c9c3db175e01afa0ac1d24eadb00f7bb7d004d89.c53n0vmbvp41.ap-south-1.rds.amazonaws.com',
#         'PORT': '5432',
#         }
# }

DATABASE_ROUTERS = (
    'django_tenants.routers.TenantSyncRouter',
)


AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, "../static")

MEDIA_ROOT = os.path.join(BASE_DIR, "../media")
MEDIA_URL = '/media/'

ASGI_APPLICATION = 'builder.routing.application'


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'


EMAIL_USE_TLS = True

EMAIL_HOST = 'smtp.gmail.com'

EMAIL_HOST_USER = ''

EMAIL_HOST_PASSWORD = ''

EMAIL_RECEIVER_USER = 'mywofo24@gmail.com'

EMAIL_PORT = 587

#Domain DNS Management

dns_email = "mywofo24@gmail.com"
dns_api_key = "8915938f255a8f7ddafc3cd744b133dd3b94a"
dns_domain = "wofo24.com"
dns_ip_addrees = '3.110.120.1'