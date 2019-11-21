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
  
  search(): void {
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

maxCount: number = 5;
imageBoolean: boolean = false;
imageTest: string = "";
artistLink: string = "";
artistName: string = "";
htmlYouWantToAdd: string = "";
count: number = 1;
col: number =0;


}