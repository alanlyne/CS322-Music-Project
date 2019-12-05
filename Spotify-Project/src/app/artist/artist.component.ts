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
  
  viewMore(): void {
    this.searchDone = false;
    this.artistService.setSearchParams(this.genre);
    this.artistService.SearchArtist().subscribe(res => {
      //Array of artist objects 
      this.artistList = res["artists"]["items"];
      this.artistList2.push(this.artistList);
      console.log(this.artistList2);
    });
  }

  increaseMaxCount(): void {
    this.maxCount += 5;
  }

  searchPopUp(): void {
    this.artistList2 = []
    this.searchDone = true;
    this.maxCount = 0;
  }

    maxCount: number = 5;
    searchDone: boolean = true;
}