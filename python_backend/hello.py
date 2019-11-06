import time
import json
import requests
from flask import Flask, request


app = Flask(__name__)



def get_token(code):
    url="https://accounts.spotify.com/api/token"
    data={
        'grant_type': 'client_credentials',
        'code':code,
        'redirect_uri':"http://localhost:8080/tester"
    }    
    client_id = 
    client_secret = 


   

    response=requests.post(url, data=data, auth = (client_id, client_secret)) 
    print("-------------------------------------")
    print(response.status_code)
    print("-------------------------------------")

    return response

@app.route('/tester')
def hello():
    
    if 'code' in request.args:
        code = request.args.get('code')
        response = get_token(code)
        json_response = response.json()
        return json_response
    if 'error' in request.args:
        code = request.args.get('error')
    else:
        code = "This was unexpected, where my queries at?"
    #count = get_hit_count()
    

    return code


if __name__=='__main__':
    app.run(host='0.0.0.0', port=8080)