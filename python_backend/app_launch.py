import time
import json
import requests
import sys
import spotipy
import os
from flask import Flask, request
from spotipy import  oauth2
import spotipy.util as util
from flask.json import jsonify
from flask_cors import CORS

app = Flask(__name__)
#cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
CORS(app)
# client_id = sys.argv[1] 
# client_secret = sys.argv[2] 
redirect_uri = 'http://localhost:8080/tester'

client_id = '825fb8e2f83e479e8823d725c9a2dc22'
client_secret = '04e10e2a2c2e42379617c1f1372a7c02'
os.environ['SPOTIPY_CLIENT_ID'] = client_id
os.environ['SPOTIPY_CLIENT_SECRET'] = client_secret
os.environ['SPOTIPY_REDIRECT_URI'] = redirect_uri

class SpotifyApi(object):
    
    client_id = os.environ['SPOTIPY_CLIENT_ID']
    client_secret = os.environ['SPOTIPY_CLIENT_SECRET']
    redirect_uri = os.environ['SPOTIPY_REDIRECT_URI']  
    _id = oauth2.SpotifyOAuth(client_id, client_secret, redirect_uri)
    client_test= oauth2.SpotifyClientCredentials()
    def generate_token(self, user_code):
        url="https://accounts.spotify.com/api/token"
        data={
            'grant_type': 'client_credentials',
            #'grant_type': 'authorization_code',
            'code':user_code,
            'redirect_uri':"http://localhost:8080/tester"
        }    
    

        response=requests.post(url, data=data, auth = (self.client_id, self.client_secret)) 
    

        return response.json()
    def get_spotify_toolbox(self, requesting):
        #auth_obj = oauth2.SpotifyOAuth(client_id, client_secret, redirect_uri):
        if 'code' in requesting.args:
            code = requesting.args.get('code')
        
        elif 'error' in request.args:
            code = requesting.args.get('error')
            raise code
        else:
            code = "This was unexpected, where my queries at?"

        #token=self._id.get_access_token(code)
        #print("----------------token-----------------")
                #print(token)

        token = self.generate_token(code)

        token = token['access_token']
        #spotify_toolbox = spotipy.Spotify(client_credentials_manager=self._id, auth=token)

        spotify_toolbox = spotipy.Spotify(client_credentials_manager=self.client_test)
        print("-------------------------------------")
        return spotify_toolbox






@app.route('/login')
def login():    
    toolbox = SpotifyApi().get_spotify_toolbox(request)
    return "hi"

    

@app.route('/search', methods = ['GET', 'POST'])
def search():
    toolbox = SpotifyApi().get_spotify_toolbox(request)
    if request.is_json:
        content = request.get_json()
        print(content)
        toolbox = SpotifyApi().get_spotify_toolbox(request)

        results = toolbox.search(content,limit=10,offset=1,type="artist",market="IE")
        return jsonify(results)

    return("NO JSON OBJ IN POST")



if __name__=='__main__':

    print (SpotifyApi.client_id)
    """spotipy.client.SpotifyOAuth(    
        client_id=sys.argv[1],
        client_secret=sys.argv[2] ,
        redirect_uri='http://localhost:8080/tester')
    """

    """
    auth_obj = oauth2.SpotifyOAuth(client_id, client_secret, redirect_uri):
    token=auth_obj.get_access_token(code)

    #client_credentials_manager = oauth2.SpotifyClientCredentials()
    spotify_toolbox = spotipy.Spotify(client_credentials_manager=auth_obj, auth=token)
    """
    
    app.run(host='0.0.0.0', port=8080)
