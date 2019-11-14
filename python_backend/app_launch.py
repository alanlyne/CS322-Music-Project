import time
import json
import requests
import sys
import spotipy
import os
from flask import Flask, request
from spotipy.oauth2 import SpotifyClientCredentials


app = Flask(__name__)

class SpotifyApi:
    client_id = None
    client_secret = None
    def __init__(self, user_code):
        self.user_code = user_code
        self.token = get_token(user_code)

    def get_token(self, user_code):
        """
        search DB
        """
        return generate_token(user_code)

def generate_token(self, user_code):
    url="https://accounts.spotify.com/api/token"
    data={
        'grant_type': 'client_credentials',
        'code':user_code,
        'redirect_uri':"http://localhost:8080/tester"
    }    
    client_id = self.client_id
    client_secret = self.client_secret

    response=requests.post(url, data=data, auth = (client_id, client_secret)) 
    print("-------------------------------------")
    print(response.status_code)
    print("-------------------------------------")

    return response

@app.route('/login')
def login():    
    if 'code' in request.args:
        code = request.args.get('code')
        response = generate_token(code)
        json_response = response.json()
        return json_response
    if 'error' in request.args:
        code = request.args.get('error')
    else:
        code = "This was unexpected, where my queries at?"
    #count = get_hit_count()
    return code

@app.route('/search')
def search():

    spotify = spotipy.Spotify()

    q="genre:Rock" #year:1981
    results = spotify.search('Radiohead')
    #results = spotify.search(q,limit=10,offset= 9000,type="artist",market="IE")
    return results

if __name__=='__main__':
    #SpotifyApi.client_id = sys.argv[1] 
    #SpotifyApi.client_secret = sys.argv[2] 
    os.environ['SPOTIPY_CLIENT_ID'] = sys.argv[1]
    os.environ['SPOTIPY_CLIENT_SECRET'] = sys.argv[2]
    os.environ['SPOTIPY_REDIRECT_URI'] = 'http://localhost:8080/tester'

    """spotipy.client.SpotifyOAuth(    
        client_id=sys.argv[1],
        client_secret=sys.argv[2] ,
        redirect_uri='http://localhost:8080/tester')
    """


    client_credentials_manager = SpotifyClientCredentials()
    sp = spotipy.Spotify(client_credentials_manager=client_credentials_manager)

    app.run(host='0.0.0.0', port=8080)
