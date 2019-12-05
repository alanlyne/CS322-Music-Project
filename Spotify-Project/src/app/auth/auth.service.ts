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
    redirect_uri: string = "http://localhost:8080/search";

    authorize(): void {

      window.location.href=this.redirect_uri;
    }
}