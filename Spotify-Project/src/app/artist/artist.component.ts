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

  constructor(private artistService: ArtistService) {}
  ngOnInit(): void {}

  // getArtists(): void {
  //   console.log("Hello");
  //   this.artistList = this.artsitService.getArtists();
  //   console.log(this.artistList);
  // }

  htmlYouWantToAdd;

  // private addHTML() {
  //   this.artistList = this.artsitService.getArtists();
  //   this.artistList.forEach(element => {
  //     this.htmlYouWantToAdd+=element.name + "</br>"
  //   });
  // }

  search(): void {
    this.artistService.SearchArtist().subscribe(res => {
      this.artistList = res["artists"]["items"];
      console.log(this.artistList);
      this.artistList.forEach(artist =>{
        console.log(artist.name);
        this.htmlYouWantToAdd += artist.name + "<br>";
      })
      return this.htmlYouWantToAdd;
    });
  }
  
}
