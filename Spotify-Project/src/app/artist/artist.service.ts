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
        "href": "https://api.spotify.com/v1/search?query=Ben&type=artist&market=US&offset=1&limit=50",
        "items": [
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4AapPt7H6bGH4i7chTulpI"
            },
            "followers": {
              "href": null,
              "total": 210426
            },
            "genres": [
              "acoustic pop",
              "folk-pop",
              "indiecoustica",
              "lds youth",
              "neo mellow",
              "piano rock",
              "pop rock"
            ],
            "href": "https://api.spotify.com/v1/artists/4AapPt7H6bGH4i7chTulpI",
            "id": "4AapPt7H6bGH4i7chTulpI",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/a77058fc425f201f21ae34ecf98c14ab502da2d7",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/02fcfa75232e30bccfac021e5f564a07e1a9d9c1",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/97ddab08532851fcbb085e4d805e2a8afb96b450",
                "width": 160
              }
            ],
            "name": "Ben Rector",
            "popularity": 68,
            "type": "artist",
            "uri": "spotify:artist:4AapPt7H6bGH4i7chTulpI"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5schNIzWdI9gJ1QRK8SBnc"
            },
            "followers": {
              "href": null,
              "total": 1632159
            },
            "genres": [
              "british singer-songwriter",
              "chamber pop",
              "fingerstyle",
              "folk-pop",
              "indie folk",
              "neo mellow",
              "stomp and holler"
            ],
            "href": "https://api.spotify.com/v1/artists/5schNIzWdI9gJ1QRK8SBnc",
            "id": "5schNIzWdI9gJ1QRK8SBnc",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/7ec49cdc5e055089b05e7202bfd52cdf7ab63fcf",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/b50567b5a603a0e0a15c171732762cc5fc16c7c4",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/45e93ccf2ca704881ab413a662df10e49ee6bbfb",
                "width": 160
              }
            ],
            "name": "Ben Howard",
            "popularity": 72,
            "type": "artist",
            "uri": "spotify:artist:5schNIzWdI9gJ1QRK8SBnc"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3plJVWt88EqjvtuB4ZDRV3"
            },
            "followers": {
              "href": null,
              "total": 289395
            },
            "genres": [
              "adult standards",
              "brill building pop",
              "motown",
              "rock-and-roll",
              "soul",
              "southern soul"
            ],
            "href": "https://api.spotify.com/v1/artists/3plJVWt88EqjvtuB4ZDRV3",
            "id": "3plJVWt88EqjvtuB4ZDRV3",
            "images": [
              {
                "height": 1185,
                "url": "https://i.scdn.co/image/22c8cd28a71661b4dbd462e2d45b04b3e1b78572",
                "width": 1000
              },
              {
                "height": 758,
                "url": "https://i.scdn.co/image/7acecc812be1bfff5c86e12fa96d22a99a69ca0c",
                "width": 640
              },
              {
                "height": 237,
                "url": "https://i.scdn.co/image/48e0bc961b3644ff379274161608e99dae724ac9",
                "width": 200
              },
              {
                "height": 76,
                "url": "https://i.scdn.co/image/a39ccfe63434e7a48f0037007746264bf8c0f19c",
                "width": 64
              }
            ],
            "name": "Ben E. King",
            "popularity": 67,
            "type": "artist",
            "uri": "spotify:artist:3plJVWt88EqjvtuB4ZDRV3"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5BG0gerrHZFHPaIEi43FHB"
            },
            "followers": {
              "href": null,
              "total": 344
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/5BG0gerrHZFHPaIEi43FHB",
            "id": "5BG0gerrHZFHPaIEi43FHB",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273dbad148939c45f1d882a2dcc",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02dbad148939c45f1d882a2dcc",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851dbad148939c45f1d882a2dcc",
                "width": 64
              }
            ],
            "name": "Ben Russell",
            "popularity": 62,
            "type": "artist",
            "uri": "spotify:artist:5BG0gerrHZFHPaIEi43FHB"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/55tif8708yyDQlSjh3Trdu"
            },
            "followers": {
              "href": null,
              "total": 195482
            },
            "genres": [
              "folk-pop",
              "indie pop",
              "permanent wave",
              "piano rock",
              "pop rock"
            ],
            "href": "https://api.spotify.com/v1/artists/55tif8708yyDQlSjh3Trdu",
            "id": "55tif8708yyDQlSjh3Trdu",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/80336141a2bae8af0d392c00b9fb9431d2d3b5db",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/06f9ddabf93708552ca1442d5f93d81ce78e6261",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/5aea9de076e0b75b9d36a3d28a6a19344cb06e3d",
                "width": 160
              }
            ],
            "name": "Ben Folds",
            "popularity": 57,
            "type": "artist",
            "uri": "spotify:artist:55tif8708yyDQlSjh3Trdu"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/45lorWzrKLxfKlWpV7r9CN"
            },
            "followers": {
              "href": null,
              "total": 655592
            },
            "genres": [
              "neo mellow"
            ],
            "href": "https://api.spotify.com/v1/artists/45lorWzrKLxfKlWpV7r9CN",
            "id": "45lorWzrKLxfKlWpV7r9CN",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/e3f58b27247ad228434b0ce805202e625c74772c",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/5a7f0f4a7e045c8ce4a25a9df1bcbfa22e580139",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/5ce9600a4170493d66259c1c55458ed3a6d39d15",
                "width": 160
              }
            ],
            "name": "Ben Harper",
            "popularity": 64,
            "type": "artist",
            "uri": "spotify:artist:45lorWzrKLxfKlWpV7r9CN"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4DAcJXcjX0zlQAZAPAx4Zb"
            },
            "followers": {
              "href": null,
              "total": 923014
            },
            "genres": [
              "opm",
              "pinoy indie"
            ],
            "href": "https://api.spotify.com/v1/artists/4DAcJXcjX0zlQAZAPAx4Zb",
            "id": "4DAcJXcjX0zlQAZAPAx4Zb",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/14ca3ddc27d05865bd7d352a07b7db4f87a74254",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/45f971177ab9a5065064a97b067264e0dc6f15fe",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/b53e7970af102c82fe09aa289e8d982c0ffdad2e",
                "width": 160
              }
            ],
            "name": "Ben&Ben",
            "popularity": 76,
            "type": "artist",
            "uri": "spotify:artist:4DAcJXcjX0zlQAZAPAx4Zb"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0CTpeTOAvzc1FOlPj4uYWV"
            },
            "followers": {
              "href": null,
              "total": 9648
            },
            "genres": [
              "lo-fi beats"
            ],
            "href": "https://api.spotify.com/v1/artists/0CTpeTOAvzc1FOlPj4uYWV",
            "id": "0CTpeTOAvzc1FOlPj4uYWV",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/292a89b7fa511167863c50996238c2be61d97319",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/b7c1e4936c0f6452045312ae59eff79f1e5e60da",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/4e16f3d7f6bd00d686ff373551955704bae787bf",
                "width": 160
              }
            ],
            "name": "Ben Beal",
            "popularity": 54,
            "type": "artist",
            "uri": "spotify:artist:0CTpeTOAvzc1FOlPj4uYWV"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/46yt6WJsgzPiAtnCe809UV"
            },
            "followers": {
              "href": null,
              "total": 3691
            },
            "genres": [
              "broadway",
              "hollywood",
              "show tunes"
            ],
            "href": "https://api.spotify.com/v1/artists/46yt6WJsgzPiAtnCe809UV",
            "id": "46yt6WJsgzPiAtnCe809UV",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27322d94316df15906dbdc54848",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0222d94316df15906dbdc54848",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485122d94316df15906dbdc54848",
                "width": 64
              }
            ],
            "name": "Ben Fankhauser",
            "popularity": 50,
            "type": "artist",
            "uri": "spotify:artist:46yt6WJsgzPiAtnCe809UV"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/44gRHbEm4Uqa0ykW0rDTNk"
            },
            "followers": {
              "href": null,
              "total": 162287
            },
            "genres": [
              "alternative rock",
              "folk-pop",
              "indie pop",
              "permanent wave",
              "piano rock",
              "pop rock"
            ],
            "href": "https://api.spotify.com/v1/artists/44gRHbEm4Uqa0ykW0rDTNk",
            "id": "44gRHbEm4Uqa0ykW0rDTNk",
            "images": [
              {
                "height": 1000,
                "url": "https://i.scdn.co/image/92a8fbbe68b87001e1d096a4b1b7d1a29fdd364d",
                "width": 1000
              },
              {
                "height": 640,
                "url": "https://i.scdn.co/image/72ec268a51113c8040981b89572f629b18c48cbf",
                "width": 640
              },
              {
                "height": 200,
                "url": "https://i.scdn.co/image/96801bcf03b9eec8f20812504fe85e7b90edfa52",
                "width": 200
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/b0a610cba32f858fe8b5caffa0a8e39b16183b68",
                "width": 64
              }
            ],
            "name": "Ben Folds Five",
            "popularity": 52,
            "type": "artist",
            "uri": "spotify:artist:44gRHbEm4Uqa0ykW0rDTNk"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5tDjiBYUsTqzd0RkTZxK7u"
            },
            "followers": {
              "href": null,
              "total": 38576
            },
            "genres": [
              "deep melodic euro house",
              "progressive house",
              "tropical house"
            ],
            "href": "https://api.spotify.com/v1/artists/5tDjiBYUsTqzd0RkTZxK7u",
            "id": "5tDjiBYUsTqzd0RkTZxK7u",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/6b93e71d81c6ecdcdd350491a2f9c863ed7e6af5",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/dc48b521f20acc75a668244def7d970f9f041507",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/8614e4044d67dee0af53e890c1f8d2522510dcae",
                "width": 160
              }
            ],
            "name": "Ben Böhmer",
            "popularity": 58,
            "type": "artist",
            "uri": "spotify:artist:5tDjiBYUsTqzd0RkTZxK7u"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3FfbgiZhcCkoiI7IzOwXlI"
            },
            "followers": {
              "href": null,
              "total": 12642
            },
            "genres": [
              "indie anthem-folk"
            ],
            "href": "https://api.spotify.com/v1/artists/3FfbgiZhcCkoiI7IzOwXlI",
            "id": "3FfbgiZhcCkoiI7IzOwXlI",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/a6223e84ca82200b74a63892f0e29e6164053717",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/2260462da50dbd000f6111d3ce347d001ebf04c0",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/c19ea16a56e686d93573d3acdbeb5f9cf26468e4",
                "width": 160
              }
            ],
            "name": "Ben Abraham",
            "popularity": 52,
            "type": "artist",
            "uri": "spotify:artist:3FfbgiZhcCkoiI7IzOwXlI"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/34W7ZCX0LZeJd8q6boKGOk"
            },
            "followers": {
              "href": null,
              "total": 48852
            },
            "genres": [
              "bebop",
              "big band",
              "contemporary post-bop",
              "cool jazz",
              "hard bop",
              "jazz",
              "jazz saxophone",
              "soul jazz",
              "stride",
              "swing",
              "vocal jazz"
            ],
            "href": "https://api.spotify.com/v1/artists/34W7ZCX0LZeJd8q6boKGOk",
            "id": "34W7ZCX0LZeJd8q6boKGOk",
            "images": [
              {
                "height": 1093,
                "url": "https://i.scdn.co/image/e007cff62c3265800fb3b5e717d6e9388970aa74",
                "width": 1000
              },
              {
                "height": 700,
                "url": "https://i.scdn.co/image/4b7e1669b41b752b37d96a3d18a648e02bbd6975",
                "width": 640
              },
              {
                "height": 219,
                "url": "https://i.scdn.co/image/4e33db90ed439fb72946f85cea8fd1f263fc0270",
                "width": 200
              },
              {
                "height": 70,
                "url": "https://i.scdn.co/image/5704d2815810612450b91f3d1488413f06d5a47b",
                "width": 64
              }
            ],
            "name": "Ben Webster",
            "popularity": 54,
            "type": "artist",
            "uri": "spotify:artist:34W7ZCX0LZeJd8q6boKGOk"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3Fh5jeRl6cDZyDwVS7iwX5"
            },
            "followers": {
              "href": null,
              "total": 565
            },
            "genres": [
              "anthem worship"
            ],
            "href": "https://api.spotify.com/v1/artists/3Fh5jeRl6cDZyDwVS7iwX5",
            "id": "3Fh5jeRl6cDZyDwVS7iwX5",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/54015917404a37680ac90993ab9f79b75cedd4f1",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/b13d5ccccc4f8518f7cd08f385b149dbcaeb89de",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/7f385e0c222f918c43cda95f2559af464fad69a5",
                "width": 160
              }
            ],
            "name": "Ben Smith",
            "popularity": 47,
            "type": "artist",
            "uri": "spotify:artist:3Fh5jeRl6cDZyDwVS7iwX5"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5JYtpnUKxAzXfHEYpOeeit"
            },
            "followers": {
              "href": null,
              "total": 427185
            },
            "genres": [
              "bossa nova",
              "mangue bit",
              "mpb",
              "pagode",
              "samba"
            ],
            "href": "https://api.spotify.com/v1/artists/5JYtpnUKxAzXfHEYpOeeit",
            "id": "5JYtpnUKxAzXfHEYpOeeit",
            "images": [
              {
                "height": 1000,
                "url": "https://i.scdn.co/image/a9c6a324c5f4a0f25bc711a7c4434c89c05ceba2",
                "width": 1000
              },
              {
                "height": 640,
                "url": "https://i.scdn.co/image/7f234b1e44539a169dd9e7f1372a87616d93f7dc",
                "width": 640
              },
              {
                "height": 200,
                "url": "https://i.scdn.co/image/8de927ae02c5ecd038c643a8b1ea8fbe63bb8c85",
                "width": 200
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/751ae07fb4d3f35265276c227fedd0630a47ecfa",
                "width": 64
              }
            ],
            "name": "Jorge Ben Jor",
            "popularity": 65,
            "type": "artist",
            "uri": "spotify:artist:5JYtpnUKxAzXfHEYpOeeit"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0lYoJnsYMVaAitj1pZVqER"
            },
            "followers": {
              "href": null,
              "total": 15392
            },
            "genres": [
              "abstract idm",
              "ambient",
              "compositional ambient",
              "drift",
              "drone",
              "focus",
              "neo-classical"
            ],
            "href": "https://api.spotify.com/v1/artists/0lYoJnsYMVaAitj1pZVqER",
            "id": "0lYoJnsYMVaAitj1pZVqER",
            "images": [
              {
                "height": 600,
                "url": "https://i.scdn.co/image/2dd4936bcb6f58ced6f58dd964ffa3ba04075e6f",
                "width": 800
              },
              {
                "height": 480,
                "url": "https://i.scdn.co/image/a1f285f2623427ad73664f12ad1f348e4190ea02",
                "width": 640
              },
              {
                "height": 150,
                "url": "https://i.scdn.co/image/177883645a155c84d8f6398e4b8997c1d462a842",
                "width": 200
              },
              {
                "height": 48,
                "url": "https://i.scdn.co/image/87bb66513c09e470d1766f6da6311c3f804c573a",
                "width": 64
              }
            ],
            "name": "Ben Lukas Boysen",
            "popularity": 51,
            "type": "artist",
            "uri": "spotify:artist:0lYoJnsYMVaAitj1pZVqER"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/546MXGKJRNfO5to1oqkfqe"
            },
            "followers": {
              "href": null,
              "total": 13416
            },
            "genres": [
              "video game music"
            ],
            "href": "https://api.spotify.com/v1/artists/546MXGKJRNfO5to1oqkfqe",
            "id": "546MXGKJRNfO5to1oqkfqe",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/1efbcb896264fb0b2fbc702ed535766cb96bd3f0",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/2b0ed10b50849166b87e01dc60445c90efb8d7a2",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/3bd071af483bf60981ddb84615ab88641c2486ab",
                "width": 160
              }
            ],
            "name": "Ben Prunty",
            "popularity": 48,
            "type": "artist",
            "uri": "spotify:artist:546MXGKJRNfO5to1oqkfqe"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2KRvZVyLdDHzoeGF6s5yAW"
            },
            "followers": {
              "href": null,
              "total": 235
            },
            "genres": [
              "calming instrumental"
            ],
            "href": "https://api.spotify.com/v1/artists/2KRvZVyLdDHzoeGF6s5yAW",
            "id": "2KRvZVyLdDHzoeGF6s5yAW",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27334c100cdba29630fe1fc61be",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0234c100cdba29630fe1fc61be",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485134c100cdba29630fe1fc61be",
                "width": 64
              }
            ],
            "name": "Ben Bouile",
            "popularity": 48,
            "type": "artist",
            "uri": "spotify:artist:2KRvZVyLdDHzoeGF6s5yAW"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0bDdOBGVCFVt0f8N9ldW1k"
            },
            "followers": {
              "href": null,
              "total": 5368
            },
            "genres": [
              "k-pop",
              "korean pop"
            ],
            "href": "https://api.spotify.com/v1/artists/0bDdOBGVCFVt0f8N9ldW1k",
            "id": "0bDdOBGVCFVt0f8N9ldW1k",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273628b76df50ffce85286b34b6",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02628b76df50ffce85286b34b6",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851628b76df50ffce85286b34b6",
                "width": 64
              }
            ],
            "name": "BEN",
            "popularity": 55,
            "type": "artist",
            "uri": "spotify:artist:0bDdOBGVCFVt0f8N9ldW1k"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6Vfn70eqp3AgtiZZtQcv4W"
            },
            "followers": {
              "href": null,
              "total": 2000
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/6Vfn70eqp3AgtiZZtQcv4W",
            "id": "6Vfn70eqp3AgtiZZtQcv4W",
            "images": [
              {
                "height": 667,
                "url": "https://i.scdn.co/image/2cdd4532142b984ca1723d03b914139b409f5af1",
                "width": 1000
              },
              {
                "height": 427,
                "url": "https://i.scdn.co/image/5ecde737d6c950fff9f02859669b89996284cba4",
                "width": 640
              },
              {
                "height": 133,
                "url": "https://i.scdn.co/image/0c9d5cf1d044193228b63b3e6be2ba9a3c12cbc4",
                "width": 200
              },
              {
                "height": 43,
                "url": "https://i.scdn.co/image/fd9a90c67cd2afeeda94205459ac35856f1caa26",
                "width": 64
              }
            ],
            "name": "Ben Bridwell",
            "popularity": 46,
            "type": "artist",
            "uri": "spotify:artist:6Vfn70eqp3AgtiZZtQcv4W"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4DXcK8M3bJkCFfhHIkudyL"
            },
            "followers": {
              "href": null,
              "total": 30227
            },
            "genres": [
              "edm",
              "progressive house",
              "progressive trance",
              "trance",
              "uplifting trance"
            ],
            "href": "https://api.spotify.com/v1/artists/4DXcK8M3bJkCFfhHIkudyL",
            "id": "4DXcK8M3bJkCFfhHIkudyL",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/2c0eeb066dbfb27524e595d86c92cba0a69f8042",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/22cb84fc6611f527c0deee99a8511d4136e57bac",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/77565f72142549f16929041c4ea40e6ccc8dae9f",
                "width": 160
              }
            ],
            "name": "Ben Gold",
            "popularity": 53,
            "type": "artist",
            "uri": "spotify:artist:4DXcK8M3bJkCFfhHIkudyL"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6vC6QxsKxAx7ooXarW8JWZ"
            },
            "followers": {
              "href": null,
              "total": 5254
            },
            "genres": [
              "otacore"
            ],
            "href": "https://api.spotify.com/v1/artists/6vC6QxsKxAx7ooXarW8JWZ",
            "id": "6vC6QxsKxAx7ooXarW8JWZ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab2f2d5debdf3980b5dc1d96838d46e12d1b4b32",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/55e561c9512a778c844c25bf3aa4f9767c9909b9",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/17fe7c35bb227324a399a02f3f726019471408d8",
                "width": 160
              }
            ],
            "name": "Ben Briggs",
            "popularity": 45,
            "type": "artist",
            "uri": "spotify:artist:6vC6QxsKxAx7ooXarW8JWZ"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7n4cyL40CdreXwIw00c8RX"
            },
            "followers": {
              "href": null,
              "total": 20693
            },
            "genres": [
              "channel pop"
            ],
            "href": "https://api.spotify.com/v1/artists/7n4cyL40CdreXwIw00c8RX",
            "id": "7n4cyL40CdreXwIw00c8RX",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/49ed44f0945b9383abf3660f748cd7573d2fab01",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/dc2193232a643450eb1ba34a1cd171f25fa997ff",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/17fc6cd5a668a7eb94d27a85420cd006ece905c3",
                "width": 160
              }
            ],
            "name": "Ben Schuller",
            "popularity": 52,
            "type": "artist",
            "uri": "spotify:artist:7n4cyL40CdreXwIw00c8RX"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5gpdr2m2nOvvKrEgtbD16W"
            },
            "followers": {
              "href": null,
              "total": 4625
            },
            "genres": [
              "folk-pop"
            ],
            "href": "https://api.spotify.com/v1/artists/5gpdr2m2nOvvKrEgtbD16W",
            "id": "5gpdr2m2nOvvKrEgtbD16W",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/247a5a53e252ee97501e0fcb085b9d1180e3ff52",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/653c51020c5abc2a9fc3abc851137b923b3cf3e3",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/37f9dbc6be1c5b14f9d7c773038a08549ef499ac",
                "width": 160
              }
            ],
            "name": "Ben Zaidi",
            "popularity": 44,
            "type": "artist",
            "uri": "spotify:artist:5gpdr2m2nOvvKrEgtbD16W"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3lTGvG2QAIoGMp7BKeH4C0"
            },
            "followers": {
              "href": null,
              "total": 1664
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/3lTGvG2QAIoGMp7BKeH4C0",
            "id": "3lTGvG2QAIoGMp7BKeH4C0",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/9cab7669c7a5396cf8395091747a934b7342e1ff",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/8e6e86a891a75f02f98e8d8434fc22ea14fd7a18",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/3f31b5104cda1457e662939a76d936535276cc89",
                "width": 160
              }
            ],
            "name": "Ben Laver",
            "popularity": 47,
            "type": "artist",
            "uri": "spotify:artist:3lTGvG2QAIoGMp7BKeH4C0"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0xHa28taiElkcQf9o3z76g"
            },
            "followers": {
              "href": null,
              "total": 189749
            },
            "genres": [
              "israeli pop",
              "jewish pop"
            ],
            "href": "https://api.spotify.com/v1/artists/0xHa28taiElkcQf9o3z76g",
            "id": "0xHa28taiElkcQf9o3z76g",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/375699f1c57166feb00f5e4744be4d2d12f68946",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/0f2fd3fb7842c199b318e35db6d8b8344f976acd",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/ba323eca3510501c884cf75ef550cddcc1401489",
                "width": 160
              }
            ],
            "name": "Static & Ben El",
            "popularity": 52,
            "type": "artist",
            "uri": "spotify:artist:0xHa28taiElkcQf9o3z76g"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7bhMBjjQhgPX0q9S4Ajncn"
            },
            "followers": {
              "href": null,
              "total": 41514
            },
            "genres": [
              "indie folk",
              "indie pop",
              "pop rock"
            ],
            "href": "https://api.spotify.com/v1/artists/7bhMBjjQhgPX0q9S4Ajncn",
            "id": "7bhMBjjQhgPX0q9S4Ajncn",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/a1f237f0e2652487510fa4aa20eca6cf42031ffe",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/8df91646bb04cf9a5c02beb5bc6f036e3df8c206",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/c344d60bee1f0a9c1e64e67d81441ec2ac79858c",
                "width": 160
              }
            ],
            "name": "Ben Kweller",
            "popularity": 43,
            "type": "artist",
            "uri": "spotify:artist:7bhMBjjQhgPX0q9S4Ajncn"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3Zzs4IqjV4b0yEFWqRv1si"
            },
            "followers": {
              "href": null,
              "total": 27262
            },
            "genres": [
              "cello",
              "lexington ky indie",
              "progressive bluegrass",
              "stomp and holler"
            ],
            "href": "https://api.spotify.com/v1/artists/3Zzs4IqjV4b0yEFWqRv1si",
            "id": "3Zzs4IqjV4b0yEFWqRv1si",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/72651476a7488f279e84adb3fb1cf48e3ecbde39",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/ba5611bad8b288cf93bfa0bdbc7e88e3cad3a58a",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/130b7e7edd65ecf5a9f3179ca6cddf45f8e9b049",
                "width": 160
              }
            ],
            "name": "Ben Sollee",
            "popularity": 42,
            "type": "artist",
            "uri": "spotify:artist:3Zzs4IqjV4b0yEFWqRv1si"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5BUOOPaWd1NGRpdY8U8jTt"
            },
            "followers": {
              "href": null,
              "total": 80
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/5BUOOPaWd1NGRpdY8U8jTt",
            "id": "5BUOOPaWd1NGRpdY8U8jTt",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/bd37de1b21717e84541323c225e8af1640b899b0",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/2993cad3622edacdbb42f7b3e2cfc154edc788c8",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/dc0ff934b22dea2810b9e2e979a01f46785bd2c5",
                "width": 64
              }
            ],
            "name": "Ben Thompson",
            "popularity": 41,
            "type": "artist",
            "uri": "spotify:artist:5BUOOPaWd1NGRpdY8U8jTt"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1bs286UUnvo0aH5N0nmZEX"
            },
            "followers": {
              "href": null,
              "total": 10641
            },
            "genres": [
              "healing",
              "kirtan",
              "meditation",
              "shamanic"
            ],
            "href": "https://api.spotify.com/v1/artists/1bs286UUnvo0aH5N0nmZEX",
            "id": "1bs286UUnvo0aH5N0nmZEX",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/4a141d9d4d9ec95787406f463d36ae2a98a1f8a4",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/c14c5fd365716d596e3208c6048b026ae561a1fa",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/605f16c0257eb2b3d90e91fab005955171886c8b",
                "width": 160
              }
            ],
            "name": "Ben Leinbach",
            "popularity": 49,
            "type": "artist",
            "uri": "spotify:artist:1bs286UUnvo0aH5N0nmZEX"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/4CvZd3qzC2HbLxAoAEBRIL"
            },
            "followers": {
              "href": null,
              "total": 34769
            },
            "genres": [
              "indie folk",
              "indie pop",
              "stomp and holler"
            ],
            "href": "https://api.spotify.com/v1/artists/4CvZd3qzC2HbLxAoAEBRIL",
            "id": "4CvZd3qzC2HbLxAoAEBRIL",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/9060970394266ebc4559afa3eac1506967954374",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/a87772da84d28d792621b5d57602dc8f0a4b4991",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/19ef349847b16e24c396e82c4c92a7cdd410fefd",
                "width": 160
              }
            ],
            "name": "Benjamin Gibbard",
            "popularity": 42,
            "type": "artist",
            "uri": "spotify:artist:4CvZd3qzC2HbLxAoAEBRIL"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/06y1hH4hu3rcTUXHJevPCf"
            },
            "followers": {
              "href": null,
              "total": 35788
            },
            "genres": [
              "australian alternative rock",
              "australian pop",
              "australian rock",
              "pop rock"
            ],
            "href": "https://api.spotify.com/v1/artists/06y1hH4hu3rcTUXHJevPCf",
            "id": "06y1hH4hu3rcTUXHJevPCf",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/a4f0a40128b2fb79eaae5817be242cc3f5067c9e",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/996eb4cba9bad03d8d9101c37a4b581639ebaead",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/57cc5ba7fbfcd2b43ead905fd7479c1ee6849501",
                "width": 160
              }
            ],
            "name": "Ben Lee",
            "popularity": 50,
            "type": "artist",
            "uri": "spotify:artist:06y1hH4hu3rcTUXHJevPCf"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2eUKkTNZsIuZzV95DM0cbt"
            },
            "followers": {
              "href": null,
              "total": 197571
            },
            "genres": [
              "israeli mediterranean",
              "israeli pop"
            ],
            "href": "https://api.spotify.com/v1/artists/2eUKkTNZsIuZzV95DM0cbt",
            "id": "2eUKkTNZsIuZzV95DM0cbt",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/31d0ffcdca529370fd2207e97989a1cf2c90ece5",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/19235318f3ed8d507fc818ba2691fd257f7a92e8",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/9b3424e65a97eb2de9084aad7c42442b47fc1941",
                "width": 160
              }
            ],
            "name": "Eden Ben Zaken",
            "popularity": 53,
            "type": "artist",
            "uri": "spotify:artist:2eUKkTNZsIuZzV95DM0cbt"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7yNYyqPx2N4tCfE8omk9pZ"
            },
            "followers": {
              "href": null,
              "total": 12591
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/7yNYyqPx2N4tCfE8omk9pZ",
            "id": "7yNYyqPx2N4tCfE8omk9pZ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/c6d1046c2af67f353dd29f54c3b5df48cc49da30",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/3014f7a2bd54b97d23eead1fb9519a304f1c5fb5",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/f8d6d39357f9ff1288cbf4d40fe27891d56b7d1f",
                "width": 160
              }
            ],
            "name": "Ben Cocks",
            "popularity": 51,
            "type": "artist",
            "uri": "spotify:artist:7yNYyqPx2N4tCfE8omk9pZ"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/57Ce6izcYKvFOFlhsUFzLJ"
            },
            "followers": {
              "href": null,
              "total": 290
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/57Ce6izcYKvFOFlhsUFzLJ",
            "id": "57Ce6izcYKvFOFlhsUFzLJ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/91a0649cd17124c635425a29a5b4541b278dbb40",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/cb300e5d26f15fee732e482e9054d9fac6214841",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/02a399991e614b349a200c31330e54755e756a6f",
                "width": 160
              }
            ],
            "name": "Ben Flocks",
            "popularity": 46,
            "type": "artist",
            "uri": "spotify:artist:57Ce6izcYKvFOFlhsUFzLJ"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/6GgGzpWiamE0EwpGO5O1bg"
            },
            "followers": {
              "href": null,
              "total": 4349
            },
            "genres": [
              "meme rap"
            ],
            "href": "https://api.spotify.com/v1/artists/6GgGzpWiamE0EwpGO5O1bg",
            "id": "6GgGzpWiamE0EwpGO5O1bg",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/38326df2c3b97a580a6aa199dd5b9e5dad026f07",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/c82e7eb10779521279b20e85c5fc8d1686e1dc1e",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/ca49f24d46d3c8e93775d1385f84b3f8bacf5ab9",
                "width": 160
              }
            ],
            "name": "Iceboy Ben",
            "popularity": 43,
            "type": "artist",
            "uri": "spotify:artist:6GgGzpWiamE0EwpGO5O1bg"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/60nfj9O2pKtlqIPfxp3FEg"
            },
            "followers": {
              "href": null,
              "total": 6013
            },
            "genres": [
              "gospel",
              "smooth jazz"
            ],
            "href": "https://api.spotify.com/v1/artists/60nfj9O2pKtlqIPfxp3FEg",
            "id": "60nfj9O2pKtlqIPfxp3FEg",
            "images": [
              {
                "height": 1245,
                "url": "https://i.scdn.co/image/e0771d1217a27d6be04b782eb10331f29b9907c0",
                "width": 1000
              },
              {
                "height": 797,
                "url": "https://i.scdn.co/image/3ff94a21f4ae2434015a432cc8e89cd4e3a8c714",
                "width": 640
              },
              {
                "height": 249,
                "url": "https://i.scdn.co/image/9f9b5619e486e6e58f974840606fbc7c88f46bfb",
                "width": 200
              },
              {
                "height": 80,
                "url": "https://i.scdn.co/image/97b73f1680b5f1c5e5dea787b1713999b4bfc9ac",
                "width": 64
              }
            ],
            "name": "Ben Tankard",
            "popularity": 40,
            "type": "artist",
            "uri": "spotify:artist:60nfj9O2pKtlqIPfxp3FEg"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3kxm4932xhRKx4abHY1Tbv"
            },
            "followers": {
              "href": null,
              "total": 1246
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/3kxm4932xhRKx4abHY1Tbv",
            "id": "3kxm4932xhRKx4abHY1Tbv",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2738063f08e710235fbe85046d1",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e028063f08e710235fbe85046d1",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048518063f08e710235fbe85046d1",
                "width": 64
              }
            ],
            "name": "The Ben Taylor Band",
            "popularity": 45,
            "type": "artist",
            "uri": "spotify:artist:3kxm4932xhRKx4abHY1Tbv"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7sJ9LR0mCMgFlzJ6Y9xP64"
            },
            "followers": {
              "href": null,
              "total": 75520
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/7sJ9LR0mCMgFlzJ6Y9xP64",
            "id": "7sJ9LR0mCMgFlzJ6Y9xP64",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/9e3814bffdb21df61fc2e17d16bdce7816560c72",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/947c8bfc9e2f2816bc4a403849e6fa6b45e04332",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/39a5bda9f8598ed78a64d4e320a4eca298f35187",
                "width": 160
              }
            ],
            "name": "Ben Harper And The Innocent Criminals",
            "popularity": 50,
            "type": "artist",
            "uri": "spotify:artist:7sJ9LR0mCMgFlzJ6Y9xP64"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/142VT1MtWzaD13CnOiKFDn"
            },
            "followers": {
              "href": null,
              "total": 6758
            },
            "genres": [
              "acoustic chill"
            ],
            "href": "https://api.spotify.com/v1/artists/142VT1MtWzaD13CnOiKFDn",
            "id": "142VT1MtWzaD13CnOiKFDn",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/5ab848d4e7bac5a6c0e6a100e9a572ec610f75e0",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/23ee6e38031a83985f03c9f089cb14004da362cc",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/feb8d9117c8e4863c07448a3a8cd56b3aeaf65b4",
                "width": 160
              }
            ],
            "name": "Ben Woodward",
            "popularity": 54,
            "type": "artist",
            "uri": "spotify:artist:142VT1MtWzaD13CnOiKFDn"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2dJTa3mUidZAO9sKcY72tK"
            },
            "followers": {
              "href": null,
              "total": 183271
            },
            "genres": [
              "neo soul"
            ],
            "href": "https://api.spotify.com/v1/artists/2dJTa3mUidZAO9sKcY72tK",
            "id": "2dJTa3mUidZAO9sKcY72tK",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/e37b89997c20e6db81e55a922f3945271c7059f3",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/03dfa3456ee25d309988c312f044cda9c0d34790",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/dfc1c21b8df2bee762f123acc89be89bdd07a05c",
                "width": 160
              }
            ],
            "name": "Ben L'Oncle Soul",
            "popularity": 57,
            "type": "artist",
            "uri": "spotify:artist:2dJTa3mUidZAO9sKcY72tK"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7i0Z1tzWVamskO8eLnZ3Kx"
            },
            "followers": {
              "href": null,
              "total": 5735
            },
            "genres": [
              "bow pop",
              "israeli hip hop"
            ],
            "href": "https://api.spotify.com/v1/artists/7i0Z1tzWVamskO8eLnZ3Kx",
            "id": "7i0Z1tzWVamskO8eLnZ3Kx",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/a0bad0cea168d846ac0169a10efb26d27d62a140",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/b7ff354fe8ffb3547639e3a8b9c4f3c3aeaef333",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/60eda4c7a106240fc3a3e42f8f28f5e64ff94797",
                "width": 160
              }
            ],
            "name": "Miri Ben-Ari",
            "popularity": 48,
            "type": "artist",
            "uri": "spotify:artist:7i0Z1tzWVamskO8eLnZ3Kx"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/0XBtKvTff8E8BIhtlxjVHv"
            },
            "followers": {
              "href": null,
              "total": 973
            },
            "genres": [
              "chillhop"
            ],
            "href": "https://api.spotify.com/v1/artists/0XBtKvTff8E8BIhtlxjVHv",
            "id": "0XBtKvTff8E8BIhtlxjVHv",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/d5af5bc697ab089ec5a9a111f967946dc7037123",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/5a2a222e90b5eddf737e04cb12bc3f733845ecd1",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/7e9857fbe0e371c740a50603df728846fc270c86",
                "width": 160
              }
            ],
            "name": "Ray Ben Rue",
            "popularity": 45,
            "type": "artist",
            "uri": "spotify:artist:0XBtKvTff8E8BIhtlxjVHv"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1dtiGEl2aljrMiP2QqqoZZ"
            },
            "followers": {
              "href": null,
              "total": 6433
            },
            "genres": [
              "progressive post-hardcore"
            ],
            "href": "https://api.spotify.com/v1/artists/1dtiGEl2aljrMiP2QqqoZZ",
            "id": "1dtiGEl2aljrMiP2QqqoZZ",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/e568773f3409e001720bf0df824232ae08310211",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/7f407e0992c3d6e0a304e60d3b7319d689a1501c",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/9dbe3f9616ea015a8f9f543624188535aa613694",
                "width": 160
              }
            ],
            "name": "Ben Rosett",
            "popularity": 39,
            "type": "artist",
            "uri": "spotify:artist:1dtiGEl2aljrMiP2QqqoZZ"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/3WifYZsO8WO6hGlWIDM4Zq"
            },
            "followers": {
              "href": null,
              "total": 3288
            },
            "genres": [
              "soundtrack"
            ],
            "href": "https://api.spotify.com/v1/artists/3WifYZsO8WO6hGlWIDM4Zq",
            "id": "3WifYZsO8WO6hGlWIDM4Zq",
            "images": [
              {
                "height": 1000,
                "url": "https://i.scdn.co/image/09fd52ae6a703ba1b59951503d62ffbf27e43ae9",
                "width": 1000
              },
              {
                "height": 640,
                "url": "https://i.scdn.co/image/a82e13541a67f50e8e3f6957ba0b1ffc31639fdd",
                "width": 640
              },
              {
                "height": 200,
                "url": "https://i.scdn.co/image/9edfb03d69971b4a18921f9aeba22b81b3d6df0f",
                "width": 200
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/e3cfc7437786a25d345537720750c4da5fa4d325",
                "width": 64
              }
            ],
            "name": "Ben Salisbury",
            "popularity": 42,
            "type": "artist",
            "uri": "spotify:artist:3WifYZsO8WO6hGlWIDM4Zq"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/1JVONey6FTNKzJylzTG3ME"
            },
            "followers": {
              "href": null,
              "total": 1249
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/1JVONey6FTNKzJylzTG3ME",
            "id": "1JVONey6FTNKzJylzTG3ME",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/576760d96825b6383f100cef27785810f7a8525b",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/0f9c110e87e6c1267f01940d5e1e912985c979b4",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/82ddf1eed7910e99104a38bc19f841bbe9b6c9ea",
                "width": 160
              }
            ],
            "name": "Ben Tavera King",
            "popularity": 43,
            "type": "artist",
            "uri": "spotify:artist:1JVONey6FTNKzJylzTG3ME"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5ItKNtikXXvdBrzYzwVplB"
            },
            "followers": {
              "href": null,
              "total": 28
            },
            "genres": [
              "background music"
            ],
            "href": "https://api.spotify.com/v1/artists/5ItKNtikXXvdBrzYzwVplB",
            "id": "5ItKNtikXXvdBrzYzwVplB",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27382a00ff3f21aba31d82db4b8",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0282a00ff3f21aba31d82db4b8",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485182a00ff3f21aba31d82db4b8",
                "width": 64
              }
            ],
            "name": "Ben Evans-Parker",
            "popularity": 46,
            "type": "artist",
            "uri": "spotify:artist:5ItKNtikXXvdBrzYzwVplB"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/2kS0jWMkkFBL0mrl0VotD0"
            },
            "followers": {
              "href": null,
              "total": 945299
            },
            "genres": [
              "turkish trap"
            ],
            "href": "https://api.spotify.com/v1/artists/2kS0jWMkkFBL0mrl0VotD0",
            "id": "2kS0jWMkkFBL0mrl0VotD0",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/9a67b01980eec0553835b384c99a3a810e01074a",
                "width": 640
              },
              {
                "height": 320,
                "url": "https://i.scdn.co/image/234ff8a6a18b14e5d53947cda7e0ba4b833cc492",
                "width": 320
              },
              {
                "height": 160,
                "url": "https://i.scdn.co/image/23ce12a9c7baf6ae4cd367391a1a875925d46fc4",
                "width": 160
              }
            ],
            "name": "Ben Fero",
            "popularity": 71,
            "type": "artist",
            "uri": "spotify:artist:2kS0jWMkkFBL0mrl0VotD0"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/7pn3GFqPy6gZ6AdwpjSFpD"
            },
            "followers": {
              "href": null,
              "total": 148
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/7pn3GFqPy6gZ6AdwpjSFpD",
            "id": "7pn3GFqPy6gZ6AdwpjSFpD",
            "images": [],
            "name": "Ben Whishaw",
            "popularity": 40,
            "type": "artist",
            "uri": "spotify:artist:7pn3GFqPy6gZ6AdwpjSFpD"
          },
          {
            "external_urls": {
              "spotify": "https://open.spotify.com/artist/5A2sXpZZ3Es4AgRGrJACy9"
            },
            "followers": {
              "href": null,
              "total": 50
            },
            "genres": [],
            "href": "https://api.spotify.com/v1/artists/5A2sXpZZ3Es4AgRGrJACy9",
            "id": "5A2sXpZZ3Es4AgRGrJACy9",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273616eef9aae6fd84cd5931b6b",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02616eef9aae6fd84cd5931b6b",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851616eef9aae6fd84cd5931b6b",
                "width": 64
              }
            ],
            "name": "Ben Tofft",
            "popularity": 39,
            "type": "artist",
            "uri": "spotify:artist:5A2sXpZZ3Es4AgRGrJACy9"
          }
        ],
        "limit": 50,
        "next": "https://api.spotify.com/v1/search?query=Ben&type=artist&market=US&offset=51&limit=50",
        "offset": 1,
        "previous": "https://api.spotify.com/v1/search?query=Ben&type=artist&market=US&offset=0&limit=50",
        "total": 6273
      }
    };
    constructor(private http: HttpClient){

    }

    getArtists(index:number): IArtist[] {
      //console.log(this.st.artists);
      let artists = [];
      for(var i = index; i < index+5; i++){
        artists.push(this.st.artists.items[i]);
      }
        return artists;
        // return this.http.get<Iartist[]>(this.requestUrl)
        //   .pipe(
        //     tap(data => console.log('All: ' + JSON.stringify(data)))
        //   );
      }
}