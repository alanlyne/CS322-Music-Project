import { Component, OnInit } from "@angular/core";
import { ArtistService } from "./artist.service";
import { IArtist } from "./artist";

@Component({
  selector: "pm-artist",
  templateUrl: "artist.component.html",
  styleUrls: ["artist.component.css"]
})
export class ArtistComponent implements OnInit {
  artistList: IArtist[] = [];
  artistList2: IArtist[][] = [];
  
  constructor(private artistService: ArtistService) {}
  ngOnInit(): void {
    this.artistList = [];
    //this.artistList2 = []
  }
  
  viewMore(): void {
    this.searchDone = true;
    this.artistService.SearchArtist().subscribe(res => {
      //Array of artist objects 
      this.artistList = res["artists"]["items"];
      this.artistList2.push(this.artistList);
      console.log(this.artistList2);
      return this.htmlYouWantToAdd;
    });
}

increaseMaxCount(): void {
  this.maxCount += 5;
}

searchPopUp(): void {
  this.artistList2 = []
  this.searchDone = false;
  this.maxCount = 0;
}

maxCount: number = 5;
searchDone: boolean = false;
htmlYouWantToAdd: string = "";
}