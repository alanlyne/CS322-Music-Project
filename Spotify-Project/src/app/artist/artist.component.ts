import { Component, OnInit } from "@angular/core";
import { ArtistService } from "./artist.service";
import { Iartist } from "./artist";

@Component({
  selector: "pm-artist",
  templateUrl: "artist.html",
  styleUrls: ["artist.css"]
})
export class ArtistComponent implements OnInit {
  artistList: Iartist[] = [];

  constructor(private artsitService: ArtistService) {}
  ngOnInit(): void {}

  getArtists(): void {
    console.log("Hello");
    this.artistList = this.artsitService.getArtists();
    console.log(this.artistList);
  }

  htmlYouWantToAdd;

  private addHTML() {
    this.artistList = this.artsitService.getArtists();
    this.htmlYouWantToAdd = "cunt";
  }
  
}
