import requests
import os
from main.models import OTPs
from random import *

def sendotp(user):
    print(OTPs.objects.get(id=1), "tttttttttttttttttttttttttttt")

    try:
        otp = OTPs.objects.filter(receiver=user)
        print(otp, "jjjyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
    except(TypeError, ValueError, OverflowError, OTPs.DoesNotExist):
        otp = None
    print(otp, "llllllkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    if otp is not None:
        otp.delete()
    print("assssssssssssssssssssssssssssssssssssssssssssssssssssss")
    otp = 1234
    data = OTPs.objects.create(otp=otp, receiver=user)
    data.save()
    YOUR_AUTH_KEY="m67JEb9QGH8hLPf0KMC3alqzWjFBrIS5sVRZwONDxvdc1ni2XYGUdZh3ToK02ysS6xD5ezMHCicfXYNF"
    url = "https://www.fast2sms.com/dev/bulk"

    payload="sender_id=WOFOCR&language=english&route=qt&numbers="+str(user.phone_number)+"&message=16920&variables={#EE#}|{#AA#}&variables_values="+str(user.name)+"|"+str(otp)
    headers = {
        'authorization': YOUR_AUTH_KEY,
        'Content-Type': "application/x-www-form-urlencoded",
        'Cache-Control': "no-cache",
    }
    response = requests.request("POST", url, data=payload, headers=headers)
