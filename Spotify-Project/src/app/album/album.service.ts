import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IAlbum } from './album';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlbumService {
    requestUrlForAlbums = 'http://localhost:8080/searchAlbums';
    
    constructor(private http: HttpClient){

    }

    private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer BQD_cXQ7c2fmPZk1lOnc9wOaUFY99Ze8WmNYFqp3bfM8YR0kUql1VY4m_sMpcc9KR1c-73Z7Glia3IHwzqJTkX_lo1MOcp4FgnerCHfCCiPl4UVwH6ioPcaZJhxaDoxaf7ouWYXcSTGf23N0zdRW8BfVsPTv8CeEXSQ'
    });

    private data = {
      "genre":"rock",
      "year": "1980"
    }

    setSearchParams(genre: string, year: string): void {
      this.data.genre = genre;
      this.data.year = year;
    }

    searchAlbums(): Observable<IAlbum[]> {
      return this.http.post<IAlbum[]>(
          this.requestUrlForAlbums,
          JSON.stringify(this.data),
          {headers: this.headers}
      ).pipe();
    }
}