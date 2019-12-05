import { Component, OnInit } from "@angular/core";
import { ArtistService } from "./artist.service";
import { IArtist } from "./artist";

@Component({
  selector: "pm-artist",
  templateUrl: "artist.component.html",
  styleUrls: ["artist.component.css"]
})

export class ArtistComponent implements OnInit {
  genre: string;
  year: string;
  artistList: IArtist[] = [];
  artistList2: IArtist[][] = [];


  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
  }

  search(): void {
    this.artistList2 = []
    this.searchDone = true;
    this.artistService.SearchArtist().subscribe(res => {
      //Array of artist objects
      this.artistList = res["artists"]["items"];
        for(var i = 0; i<this.artistList.length; i++) {
          this.artistList[i].topSongs = "https://open.spotify.com/embed/artist/" + this.artistList[i].id;
        }
      this.artistList2.push(this.artistList);
      console.log(this.artistList2);
      return this.htmlYouWantToAdd;
    });
}

  viewMore(): void {
    this.searchDone = false;
    this.artistService.setSearchParams(this.genre);
    this.artistService.SearchArtist().subscribe(res => {
      //Array of artist objects
      this.artistList = res["artists"]["items"];
      for(var i = 0; i<this.artistList.length; i++) {
        this.artistList[i].topSongs = "https://open.spotify.com/embed/artist/" + this.artistList[i].id;
      }
      this.artistList2.push(this.artistList);
      console.log(this.artistList2);
    });
  }

  increaseMaxCount(): void {
    this.maxCount += 5;
  }

searchPopUp(): void {
  this.searchDone = false;
  this.maxCount = 0;
}

viewArtistCover(id): void {
  var img = document.getElementById("img"+id);
  var ifr = document.getElementById("ifr"+id);

  if (img.style.display === "none") {
    img.style.display = "block";
    ifr.style.display = "none";
  } else {
    ifr.style.display = "block";
    img.style.display = "none";
  }
}

viewSongs: boolean = false;
maxCount: number = 5;
searchDone: boolean = false;
htmlYouWantToAdd: string = "";
}
