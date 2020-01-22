import json
import os
import sys

import requests
import spotipy
from flask import Flask, redirect, request
from flask.json import jsonify
from flask_cors import CORS
from spotipy import oauth2
# secrets
from spotipy.client import Spotify

global user

user = []
app = Flask(__name__)

app.config["SECRET_KEY"] = "FMx6MtDOQUOCh7C8uQhtVg"
# app.config["SECRET_KEY"]=secrets.token_urlsafe(16)
CORS(app)
# client_id = sys.argv[1]
# client_secret = sys.argv[2]
redirect_uri = 'http://localhost:8080/tester'
frontend = "http://localhost:4200"
client_id = ''
client_secret = ''
os.environ['SPOTIPY_CLIENT_ID'] = client_id
os.environ['SPOTIPY_CLIENT_SECRET'] = client_secret
os.environ['SPOTIPY_REDIRECT_URI'] = redirect_uri


class SpotInhear(Spotify):

    def user_follow_artists(self, ids=[]):
        return self._put('me/following?type=artist&ids='+','.join(ids))

    def user_unfollow_artists(self, ids=[]):
        return self._delete('me/following?type=artist&ids='+','.join(ids))


class SpotifyApi(object):

    client_id = os.environ['SPOTIPY_CLIENT_ID']
    client_secret = os.environ['SPOTIPY_CLIENT_SECRET']
    redirect_uri = os.environ['SPOTIPY_REDIRECT_URI']
    _id = oauth2.SpotifyOAuth(client_id, client_secret, redirect_uri)
    client = oauth2.SpotifyClientCredentials()

    def generate_token(self, user_code):
        url = "https://accounts.spotify.com/api/token"
        data = {
            # 'grant_type': 'client_credentials',
            'grant_type': 'authorization_code',
            'code': user_code,
            'redirect_uri': "http://localhost:8080/login",
        }
        response = requests.post(url, data=data, auth=(
            self.client_id, self.client_secret))

        return response.json()

    def get_spotify_toolbox(self, requesting):
        if 'code' in requesting.args:
            code = requesting.args.get('code')

        elif 'error' in request.args:
            code = requesting.args.get('error')
            raise code
        else:
            code = "This was unexpected, where my queries at?"
        spotify_toolbox = spotipy.Spotify(
            client_credentials_manager=self.client)
        return spotify_toolbox


@app.route('/getgen')
def getgen():
    f = open("my-file.txt", "r")
    red = f.read()
    li = list(red.split(","))
    li.sort()
    f.close()
    return jsonify(li)


def addgen(genre):
    f = open("my-file.txt", "r")
    red = f.read()
    li = list(red.split(","))
    f.close()
    if genre not in li:
        a = open("my-file.txt", "a")
        a.write(","+str(genre))
        a.close()


def build_query(content):
    temp = str(content)
    q = ""
    for char in temp:
        if char == "'" or char == "{" or char == "}":
            pass
        else:
            q += char
    return q


def build_offset(offset, nudge, results):
    maxi = int(results["artists"]["total"])
    offset = (maxi*(int(offset)/100))
    offset = int(round(offset))
    offset += int(nudge)
    if int(nudge) > 5:
        return offset
    if maxi < offset+5:
        offset = maxi-5
    if (maxi <= 5):
        offset = 0
    return offset


@app.route('/logout')
def logout():
    if len(user) > 0:
        user.pop()
    return jsonify("logged out")


@app.route('/login')
def login():
    code = request.args.get('code')
    token = SpotifyApi().generate_token(code)
    if len(user) == 0:
        user.append(token)
    else:
        user[0] = token
    return redirect(frontend+"/close")


@app.route('/follow', methods=['GET', 'POST'])
def gettoken():
    art_id = request.headers.get('id')   
    token = user[0]    
    follow_tool = SpotInhear(auth=token["access_token"])
    follow_tool.user_follow_artists(ids=[art_id])
    return jsonify("followed")


@app.route('/unfollow', methods=['GET', 'POST'])
def unfollow():
    art_id = request.headers.get('id')
    token = user[0]
    follow_tool = SpotInhear(auth=token["access_token"])
    follow_tool.user_unfollow_artists(ids=[art_id])
    return jsonify("unfollow")


@app.route('/search', methods=['GET', 'POST'])
def search():
    toolbox = SpotifyApi().get_spotify_toolbox(request)
    if request.is_json:
        content = request.get_json()
        offset = content.pop("offset")
        nudge = content.pop("nudge")
        try:
            genre = content.get("genre")
        except:
            pass
        toolbox = SpotifyApi().get_spotify_toolbox(request)
        query = build_query(content)
        results = toolbox.search(
            q=query, limit=1, offset=0, type="artist", market="IE")

        offset = build_offset(offset, nudge, results)

        if int(results["artists"]["total"]):
            addgen(genre)

        results = toolbox.search(
            q=query, limit=5, offset=offset, type="artist", market="IE")
        return jsonify(results)
    return("NO JSON OBJ IN POST")


@app.route('/getUser', methods=['GET', 'POST'])
def getUser():
    token = user[0]
    print("++++++++++++++++++++(++++++++++++++++++++")
    print(token)
    sp = SpotInhear(auth=token["access_token"])
    user_data = sp.current_user()
    return jsonify(user_data)


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=8080)
