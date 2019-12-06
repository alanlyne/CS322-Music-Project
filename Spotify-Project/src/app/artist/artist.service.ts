import { Injectable } from '@angular/core';
import { IArtist } from './artist';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArtistService{

    requestUrlForArtists = 'http://localhost:8080/search';

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
          this.requestUrlForArtists,
          JSON.stringify(this.data),
          {headers: this.headers}
      ).pipe();
    }
}
