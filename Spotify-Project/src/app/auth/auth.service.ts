import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'; 
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUser } from './user/user';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http: HttpClient){

    }

    private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer BQD_cXQ7c2fmPZk1lOnc9wOaUFY99Ze8WmNYFqp3bfM8YR0kUql1VY4m_sMpcc9KR1c-73Z7Glia3IHwzqJTkX_lo1MOcp4FgnerCHfCCiPl4UVwH6ioPcaZJhxaDoxaf7ouWYXcSTGf23N0zdRW8BfVsPTv8CeEXSQ'
    });

    public userInfo: IUser = null;

    baseUrl = 'http://localhost:8080/';
    getUserEndpoint = this.baseUrl + 'getUser';

    client_id = "825fb8e2f83e479e8823d725c9a2dc22";
    redirect_uri: string = "http://localhost:8080/login";
    logoutEndpoint: string = "http://localhost:8080/logout";
    url: string = "https://accounts.spotify.com/authorize?client_id=" + this.client_id + "&response_type=code&redirect_uri=" + this.redirect_uri + "&scope=user-follow-modify%20user-read-private%20user-read-email&state=34fFs29kd09&show_dialog=true";

    authorize(): void {
      window.open(this.url);
    }

    user: IUser = null;
    getUserInfo(): Observable<IUser> {
      return this.http.get<IUser>(
        this.getUserEndpoint,
        {headers: this.headers}
        ).pipe(
            catchError((error: HttpErrorResponse) => {
              if (error.error instanceof Error) {
                // A client-side or network error occurred. Handle it accordingly.
                console.error('Not logged in.', error.error.message);
              } else {
                // The backend returned an unsuccessful response code.
                // The response body may contain clues as to what went wrong,
                console.error('Log-in in process.');
              } 
              return EMPTY;
            }));
    }
    
    logOut(): Observable<string> {
      return this.http.get<string>(
          this.logoutEndpoint
        ).pipe()
    }
}