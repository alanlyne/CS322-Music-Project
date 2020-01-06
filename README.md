 pre-setup
    keys
    client_id key and client_secret key must be gotten from https://developer.spotify.com
           
    put client key into the /Spotify-Project/src/app/auth/auth.service.ts line 28
            
    put client_id key and client_secret key into the /python_backend/app_launch.py lines 26, 27
     
    add redirect URL in the spotify app dashboard we are using http://localhost:8080/login
      
Docker setup
setup
    Docker and docker-compose installed
run
    
    docker-compose up

Non docker setup

setup
    Python3 and pip installed
    node installed
    
   
Non docker setup
   Backend
    
        WORKDIR  /python_backend
        pip install -r requirements.txt
        python app_launch.py
        
   Frontend
   
        WORKDIR /Spotify-Project/src/app
        npm install
        npm install -g @angular/cli
        ng serve

