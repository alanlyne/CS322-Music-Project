import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';

import { ArtistComponent } from './artist.component';
import { IArtist } from './artist';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArtistService{

    requestUrl = 'http://localhost:8080/search';
    st = {
        "artists": {
          "href": "https://api.spotify.com/v1/search?query=Muse&type=artist&market=US&offset=0&limit=1",
          "items": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/12Chz98pHFMPJEknJQMWvI"
              },
              "followers": {
                "href": null,
                "total": 5309435
              },
              "genres": [
                "modern rock",
                "permanent wave",
                "piano rock",
                "post-grunge",
                "rock"
              ],
              "href": "https://api.spotify.com/v1/artists/12Chz98pHFMPJEknJQMWvI",
              "id": "12Chz98pHFMPJEknJQMWvI",
              "images": [
                {
                  "height": 640,
                  "url": "https://i.scdn.co/image/12450535621500d6e519275f2c52d49c00a0168f",
                  "width": 640
                },
                {
                  "height": 320,
                  "url": "https://i.scdn.co/image/17f00ec7613d733f2dd88de8f2c1628ea5f9adde",
                  "width": 320
                },
                {
                  "height": 160,
                  "url": "https://i.scdn.co/image/2da69b7920c065afc835124c4786025820adab8c",
                  "width": 160
                }
              ],
              "name": "Muse",
              "popularity": 80,
              "type": "artist",
              "uri": "spotify:artist:12Chz98pHFMPJEknJQMWvI"
            }
          ],
          "limit": 1,
          "next": "https://api.spotify.com/v1/search?query=Muse&type=artist&market=US&offset=1&limit=1",
          "offset": 0,
          "previous": null,
          "total": 251
        }
      };
    constructor(private http: HttpClient){

    }

    getArtists(): IArtist[] {
      return this.st.artists.items;
      // return this.http.get<Iartist[]>(this.requestUrl)
      //   .pipe(
      //     tap(data => console.log('All: ' + JSON.stringify(data)))
      //   );
    }

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

      this.http.post<IArtist[]>(
          this.requestUrl, 
          JSON.stringify(this.data), 
          {headers: this.headers}
        ).subscribe(res =>{
          console.log("That did work")
          console.log(res)

          return res;
        },
        () => {
          console.log("That didn't work")
        });
        return;
    }
}