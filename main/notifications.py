from threading import Thread
from django.db.models import Q




def notify(user,title,message_id,service):
    try:
        device = FCMDevice.objects.filter(Q(user=user.id)&Q(active=True)).order_by('-date_created')[0]
    except(KeyError, ValueError,IndexError,OverflowError,TypeError):
        device=None
    if device:
        if message_id==16850:
            message="Your request for "+service+" service is cancelled."
        elif message_id==16848:
            message="Your request for "+service+" service has been declined due to some issues, we are sorry for the inconvenience."
        elif message_id==16846:
            message="Thankyou for being our valued customer. We are grateful for the pleasure of serving you and meeting your needs."
        elif message_id==16845:
            message ="Your request for "+service+" service has been accepted."
        device.send_message(title=title,body=message)
    else:
        msg_thread = Thread(target=send_status, args=(user,message_id,service))
        msg_thread.start()