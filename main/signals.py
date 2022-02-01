from .models import ServiceOrder
from django.db.models.signals import post_save
from django.dispatch import receiver
from channels.layers import get_channel_layer
from asgiref.sync import async_to_sync
from .serializers import ServiceOrderSerializer, RetrieveOrderSerializer
import datetime
from .views import ServiceOrderView,CalculateDateTime
from django.contrib.sites.shortcuts import get_current_site
from .views import CalculateDateTime

@receiver(post_save, sender=ServiceOrder)
def order(sender, instance, created, **kwargs):
    if created:
        print("created")
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'order', {
                'type': 'user.order',
                'event': 'New Pending Order',
                'id': instance.id,
                'user': {
                    'name':instance.user.name,
                    'phone_number':instance.user.phone_number,
                },
                'category': instance.subcategory.category.category,
                'subcategory': {
                    'id':instance.subcategory.id,
                    'subcategory': instance.subcategory.subcategory,
                },
                'time':str(instance.time),
                'service_status': instance.service_status,
                'payment_status': instance.payment_status,
            }
        )
    elif instance.service_status != 'Cancelled' and instance.service_status != 'Declined':
        print("updated user side")
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'update_user_side', 
            {
                'type': 'user.update',
                'event': 'Update Order',
                'id': instance.id,
                'user': 
                {
                    'name':instance.user.name,
                    'phone_number':instance.user.phone_number,
                },
                'category': instance.subcategory.category.category,
                'subcategory': 
                {
                    'id':instance.subcategory.id,
                    'subcategory': instance.subcategory.subcategory,
                },
                'time': str(instance.time),
                'service_status': instance.service_status,
                'payment_status': instance.payment_status,
                'professional_assigned' :
                {
                    'id':instance.professional_assigned.id,
                    'name':instance.professional_assigned.name,
                    'address':instance.professional_assigned.address,
                    'photo':"http://192.168.0.112:8000/media/"+str(instance.professional_assigned.photo),
                    'contact_number1':instance.professional_assigned.contact_number1,
                    'job_completed':instance.professional_assigned.job_completed,
                }
            }
        )
    elif instance.service_status == 'Declined':
            print("updated user side-decline")
            channel_layer = get_channel_layer()
            async_to_sync(channel_layer.group_send)(
                'update_user_side', 
                {
                    'type': 'user.update',
                    'event': 'Update Order',
                    'id': instance.id,
                    'user': 
                    {
                        'name':instance.user.name,
                        'phone_number':instance.user.phone_number,
                    },
                    'category': instance.subcategory.category.category,
                    'subcategory': 
                    {
                        'id':instance.subcategory.id,
                        'subcategory': instance.subcategory.subcategory,
                    },
                    'time':str(instance.time),
                    'service_status': instance.service_status,
                    'payment_status': instance.payment_status,
                }
            )
    else :
        print("updated admin side")
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            'update_admin_side', 
            {
                'type': 'user.update',
                'event': 'Update Order',
                'id': instance.id,
                'user': 
                {
                    'name':instance.user.name,
                    'phone_number':instance.user.phone_number,
                },
                'category': instance.subcategory.category.category,
                'subcategory': 
                {
                    'id':instance.subcategory.id,
                    'subcategory': instance.subcategory.subcategory,
                },
                'time': str(instance.time),
                'service_status': instance.service_status,
                'payment_status': instance.payment_status,
            }
        )
