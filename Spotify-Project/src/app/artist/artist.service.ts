import { Injectable } from '@angular/core';
import { IArtist } from './artist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArtistService{

    requestUrlForArtists = 'http://localhost:8080/searchArtist';

    constructor(private http: HttpClient){

    }
    private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer BQD_cXQ7c2fmPZk1lOnc9wOaUFY99Ze8WmNYFqp3bfM8YR0kUql1VY4m_sMpcc9KR1c-73Z7Glia3IHwzqJTkX_lo1MOcp4FgnerCHfCCiPl4UVwH6ioPcaZJhxaDoxaf7ouWYXcSTGf23N0zdRW8BfVsPTv8CeEXSQ'
    });

    private data = {
      "genre":"",
      "year": "1980"
    }
    setSearchParams(genre: string): void {
      this.data.genre = genre;
    }
    SearchArtist(): Observable<IArtist[]> {

      return this.http.post<IArtist[]>(
          this.requestUrlForArtists,
          JSON.stringify(this.data),
          {headers: this.headers}
      ).pipe();
    }
}
