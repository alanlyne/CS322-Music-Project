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
    this.artistList = this.artsitService.getArtists();
    this.artistList.forEach(artist => {
      this.htmlYouWantToAdd += "name: " + artist.name + "; followers: " + artist.followers.total + "\n"
    });
  }

  htmlYouWantToAdd: string = "";
  
}
