import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient){

    }

    client_id = "825fb8e2f83e479e8823d725c9a2dc22";
    redirect_uri: string = "http://localhost:8080/login";
    url: string = "https://accounts.spotify.com/authorize?client_id=" + this.client_id + "&response_type=code&redirect_uri=" + this.redirect_uri + "&scope=user-follow-modify%20user-read-private%20user-read-email&state=34fFs29kd09";

    authorize(): void {

      window.location.href=this.url;
    }
}