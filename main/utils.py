from .models import OTPs
import requests
from random import randint

URL = "http://ec2-18-223-119-254.us-east-2.compute.amazonaws.com/otps/storeotp/"

def sendotps(user):
    otp = randint(1000, 9999)
    PARAMS = {'otp': otp, 'receiver': user.phone_number}
    r = requests.request("POST", url=URL, data=PARAMS)



