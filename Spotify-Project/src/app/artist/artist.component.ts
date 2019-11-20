import { Component, OnInit } from "@angular/core";
import { ArtistService } from "./artist.service";
import { IArtist } from "./artist";

@Component({
  selector: "pm-artist",
  templateUrl: "artist.html",
  styleUrls: ["artist.css"]
})
export class ArtistComponent implements OnInit {
  artistList: IArtist[] = [];

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
    this.artistList.forEach(element => {
      this.htmlYouWantToAdd+=element.name + "</br>"
    });
  }

  search(): void {
    this.artsitService.SearchArtist().subscribe(res => {
      this.artistList = res;
    });
  }
  
}
