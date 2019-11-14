import time
import json
import requests
import sys
import spotipy

from flask import Flask, request


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
        return generate_token

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
        response = SpotifyApi.get_token(code)
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

    import spotipy
    spotify = spotipy.Spotify()
    results = spotify.search(q='artist:' + name, type='artist')
    print results
    q="genre:Rock" #year:1981
    results = sp.search(q,limit=10,offset= 9000,type="artist",market="IE")


if __name__=='__main__':
    app.run(host='0.0.0.0', port=8080)
    SpotifyApi.client_id = sys.argv[1] 
    SpotifyApi.client_secret = sys.argv[2] 