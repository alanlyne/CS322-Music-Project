How to run
pre-setup
    Python3 and pip installed

    keys
        client_id key and client_secret key must be gotten from https://developer.spotify.com
        
Docker setup:
    ~   docker-compsose up

Non docker setup
    Backend
        WORKDIR  python_backend
        pip install -r requirements.txt
        python app_launch.py

    Frontend
        WORKDIR /Spotify-Project/src/app
        npm install
        npm install -g @angular/cli
        ng serve