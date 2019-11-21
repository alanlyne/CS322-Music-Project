import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';

import { ArtistComponent } from './artist.component';
import { IArtist } from './artist';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class ArtistService{

    requestUrl = 'http://localhost:8080/search';
    
    constructor(private http: HttpClient){

    }

    // getArtists(): IArtist[] {
    //   return this.st.artists.items;
    //   // return this.http.get<Iartist[]>(this.requestUrl)
    //   //   .pipe(
    //   //     tap(data => console.log('All: ' + JSON.stringify(data)))
    //   //   );
    // }

    headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer BQD_cXQ7c2fmPZk1lOnc9wOaUFY99Ze8WmNYFqp3bfM8YR0kUql1VY4m_sMpcc9KR1c-73Z7Glia3IHwzqJTkX_lo1MOcp4FgnerCHfCCiPl4UVwH6ioPcaZJhxaDoxaf7ouWYXcSTGf23N0zdRW8BfVsPTv8CeEXSQ'
    });

    data = {
      "genre":"Rock",
      "year": "1980"
    }
    SearchArtist(): Observable<IArtist[]> {


      return this.http.post<IArtist[]>(
          this.requestUrl,
          JSON.stringify(this.data),

          {headers: this.headers}
      ).pipe();
    }
    /*let artists = [];
    for(var i = index; i < index+5; i++){
      artists.push(this.st.artists.items[i]);
    } */
}
