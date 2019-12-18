import { Injectable } from '@angular/core';
import { IArtist } from './artist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../auth/user/user';

@Injectable({
    providedIn: 'root'
})
export class ArtistService{

    baseUrl = 'http://localhost:8080/';
    requestArtistsEndpoint = this.baseUrl + 'search';
    followArtistEndpoint = this.baseUrl + 'follow';
    unfollowArtistEndpoint = this.baseUrl + 'unfollow';
    

    constructor(private http: HttpClient){

    }
    private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer BQD_cXQ7c2fmPZk1lOnc9wOaUFY99Ze8WmNYFqp3bfM8YR0kUql1VY4m_sMpcc9KR1c-73Z7Glia3IHwzqJTkX_lo1MOcp4FgnerCHfCCiPl4UVwH6ioPcaZJhxaDoxaf7ouWYXcSTGf23N0zdRW8BfVsPTv8CeEXSQ'
    });

    private data = {
      "genre":"",
      "offset":1,
      "nudge": 1
    }

    private artistId = {
      "id": ""
    }

    getGenres() : Observable<string[]> {
      return this.http.get<string[]>(this.baseUrl + "getgen").pipe();
    }


    setSearchParams(genre: string, year: string, obscurity: number, newSearch: boolean): void {
      if(year != "") {
        this.data["year"] = year;
      }
      obscurity == null ? this.data.offset = 50 : this.data.offset = obscurity;
      newSearch == true ? this.data.nudge = 1 : this.data.nudge +=5;
      this.data.genre = genre;
    }

    SearchArtist(): Observable<IArtist[]> {
      return this.http.post<IArtist[]>(
          this.requestArtistsEndpoint,
          JSON.stringify(this.data),
          {headers: this.headers}
      ).pipe();
    }

    followArtist(id: string): Observable<string> {
      console.log(id)
      this.artistId.id = id;
      return this.http.get<string>(
        this.followArtistEndpoint,
        //JSON.stringify(this.artistId),
        {headers: this.artistId}
      ).pipe()
    }

    unfollowArtist(id: string): Observable<string> {
      console.log(id)
      this.artistId.id = id;
      return this.http.get<string>(
        this.unfollowArtistEndpoint,
        //JSON.stringify(this.artistId),
        {headers: this.artistId}
      ).pipe()
    }

    
    
}
