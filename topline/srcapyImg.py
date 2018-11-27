import requests
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36',
    'cookie': 'tt_webid=6570167807656461837; tt_webid=6570167807656461837; WEATHER_CITY=%E5%8C%97%E4%BA%AC; UM_distinctid=1642b6517782f2-0b01a1dac8a25d-47e1137-144000-1642b651779e3b; tt_webid=6570167807656461837; csrftoken=a81e20140728ed9ac582e6956830066b; _ga=GA1.2.1884648530.1529736407; ccid=75226ffc7b8fd6a5232bb0fc3388a928; login_flag=3eec0846c87b89e0e80066617fbec095; sid_tt=f7ffe67a10229776847c2f367a9ec7e7; uuid="w:1f8e9a48f4214f6593673bbd272cc292"; __tea_sdk__ssid=f393b885-8ec2-4f51-b7da-59e4384f1540; sessionid=f7ffe67a10229776847c2f367a9ec7e7; sso_uid_tt=c0f85eaad4ab17d4ba52b2861abdec55; toutiao_sso_user=01a58306a6888faa63398fe2d2ea994d; sso_login_status=1; sid_guard="f7ffe67a10229776847c2f367a9ec7e7|1539595707|15552000|Sat\054 13-Apr-2019 09:28:27 GMT"; CNZZDATA1259612802=584444498-1529733723-https%253A%252F%252Fwww.baidu.com%252F%7C1543043072; __tasessionId=q8ftw3o6b1543046704216'
}
res = requests.get('https://www.toutiao.com/a6600475112439284237/',headers=headers)

# print(res.text)
# text = 'JSON.parse123443,'

regex = re.compile('JSON.parse\(\"(.*?)\"\),', re.S)

result = re.findall(regex,res.text)

result = result[0]
result = result.replace('\\','')
print(result)

