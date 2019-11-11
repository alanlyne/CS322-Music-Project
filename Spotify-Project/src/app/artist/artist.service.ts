import { Injectable } from '@angular/core';
import { catchError, tap, map } from 'rxjs/operators';

import { ArtistComponent } from './artist.component';
import { IArtist } from './artist';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArtistService{

    requestUrl = 'artists.json';
    st = {
      "artists": {
        "href": "https://api.spotify.com/v1/search?query=Muse&type=artist&market=US&offset=5&limit=10",
        "items": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3SDZMxDKKH0lFhuqEOExWi"
            },
            "followers": {
              "href": null,
              "total": 0
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/3SDZMxDKKH0lFhuqEOExWi",
            "id": "3SDZMxDKKH0lFhuqEOExWi",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/5e6a29e9b5a07ab4dcbe6d588e792a51f09737d1",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/7f307e84f871169f889be9cc91992c695dced51d",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/65be283dcdf0feb72e5c42f7e30702471c8e88c9",
                "width": 64
              }
            ],
            "name": "The Deer Muse",
            "popularity": 23,
            "type": "artist",
            "uri": "spotify:artist:3SDZMxDKKH0lFhuqEOExWi"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/15qpUkIDVVWsb60MTzCVsJ"
            },
            "followers": {
              "href": null,
              "total": 246
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/15qpUkIDVVWsb60MTzCVsJ",
            "id": "15qpUkIDVVWsb60MTzCVsJ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27356b629c85dae601593c66784",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0256b629c85dae601593c66784",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485156b629c85dae601593c66784",
                "width": 64
              }
            ],
            "name": "Clip Muse",
            "popularity": 25,
            "type": "artist",
            "uri": "spotify:artist:15qpUkIDVVWsb60MTzCVsJ"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4EieLdBUvmICuAO5n8uELW"
            },
            "followers": {
              "href": null,
              "total": 4
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/4EieLdBUvmICuAO5n8uELW",
            "id": "4EieLdBUvmICuAO5n8uELW",
            "images": [],
            "name": "Sleeping Muse",
            "popularity": 27,
            "type": "artist",
            "uri": "spotify:artist:4EieLdBUvmICuAO5n8uELW"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2nYRDHDPqrclxCKNOCFY2j"
            },
            "followers": {
              "href": null,
              "total": 3441
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/2nYRDHDPqrclxCKNOCFY2j",
            "id": "2nYRDHDPqrclxCKNOCFY2j",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/0ca8d7ae75313ea5cfac1abbb31a2333b4a58a69",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/8d962f49bc3441072811a982ab900517c9bdf374",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/9baaccc4812a187202e7ebdbc300c37997cc1373",
                "width": 160
              }
            ],
            "name": "Pixy Muse",
            "popularity": 14,
            "type": "artist",
            "uri": "spotify:artist:2nYRDHDPqrclxCKNOCFY2j"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0EcCExwuVReDp8Y86sLXUo"
            },
            "followers": {
              "href": null,
              "total": 133
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/0EcCExwuVReDp8Y86sLXUo",
            "id": "0EcCExwuVReDp8Y86sLXUo",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/fef4944016086c9f0afb7ee943ab0a0d746b30e7",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/39d74c5be6e3e929bdca315b2a4c60fc6c581487",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/ae04510bb2b9493375de9e3748651e4574de4084",
                "width": 160
              }
            ],
            "name": "Charlee Muse",
            "popularity": 20,
            "type": "artist",
            "uri": "spotify:artist:0EcCExwuVReDp8Y86sLXUo"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3uIGREwbP57eNOtcol8yrC"
            },
            "followers": {
              "href": null,
              "total": 397
            },
            "genres": [
              "harp",
              "string folk"
            ],
            "href": "https://api.spotify.com/v1/artists/3uIGREwbP57eNOtcol8yrC",
            "id": "3uIGREwbP57eNOtcol8yrC",
            "images": [],
            "name": "Celtic Muse",
            "popularity": 19,
            "type": "artist",
            "uri": "spotify:artist:3uIGREwbP57eNOtcol8yrC"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1u3g8PeUxNzaQmolXTwZRL"
            },
            "followers": {
              "href": null,
              "total": 187
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/1u3g8PeUxNzaQmolXTwZRL",
            "id": "1u3g8PeUxNzaQmolXTwZRL",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b65379756a7767cc90eca7c0",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02b65379756a7767cc90eca7c0",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851b65379756a7767cc90eca7c0",
                "width": 64
              }
            ],
            "name": "Iberian Muse",
            "popularity": 25,
            "type": "artist",
            "uri": "spotify:artist:1u3g8PeUxNzaQmolXTwZRL"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4WUHZVB8wkTnWXQGbF4SCz"
            },
            "followers": {
              "href": null,
              "total": 657
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/4WUHZVB8wkTnWXQGbF4SCz",
            "id": "4WUHZVB8wkTnWXQGbF4SCz",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/65e6eb4e725f2735d91ae58c2d95a5f7d37f672e",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/df122587b7a83b1f8f73c1b3e972bc39606adf27",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/fb07000355422dd5b65a4853284b0430d8673a72",
                "width": 160
              }
            ],
            "name": "Matt Muse",
            "popularity": 12,
            "type": "artist",
            "uri": "spotify:artist:4WUHZVB8wkTnWXQGbF4SCz"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7dwv5d4pNWa18YFMiXZiFi"
            },
            "followers": {
              "href": null,
              "total": 209
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/7dwv5d4pNWa18YFMiXZiFi",
            "id": "7dwv5d4pNWa18YFMiXZiFi",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/2094e57ac2d673414f5a733b1db969fcb402567d",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/56849064097581066c7d2051e5b5a464dad08f52",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/0767244f8c471f4b8f2ac1e7552ce15c6a3d2d8c",
                "width": 160
              }
            ],
            "name": "The Muse Maker",
            "popularity": 15,
            "type": "artist",
            "uri": "spotify:artist:7dwv5d4pNWa18YFMiXZiFi"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1zFNYw5kgA7UEKWqNHf1Et"
            },
            "followers": {
              "href": null,
              "total": 1982
            },
            "genres": [
              "electropop"
            ],
            "href": "https://api.spotify.com/v1/artists/1zFNYw5kgA7UEKWqNHf1Et",
            "id": "1zFNYw5kgA7UEKWqNHf1Et",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ae9c57fec11aec18f463764d",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ae9c57fec11aec18f463764d",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ae9c57fec11aec18f463764d",
                "width": 64
              }
            ],
            "name": "Dangerous Muse",
            "popularity": 14,
            "type": "artist",
            "uri": "spotify:artist:1zFNYw5kgA7UEKWqNHf1Et"
          }
        ],
        "limit": 10,
        "next": "https://api.spotify.com/v1/search?query=Muse&type=artist&market=US&offset=15&limit=10",
        "offset": 5,
        "previous": "https://api.spotify.com/v1/search?query=Muse&type=artist&market=US&offset=0&limit=10",
        "total": 252
      }
    };
    constructor(private http: HttpClient){

    }

    getArtists(): IArtist[] {
      //console.log(this.st.artists);
        return this.st.artists.items;
        // return this.http.get<Iartist[]>(this.requestUrl)
        //   .pipe(
        //     tap(data => console.log('All: ' + JSON.stringify(data)))
        //   );
      }
}