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
    //console.log(this.artistList[0].images[0].url);

    if(this.artistList[0].images[0].url != "") {
      this.imageTest = this.artistList[0].images[2].url;
      //this.artistLink = this.artistList[0].external_urls.spotify;
      this.artistName = this.artistList[0].name;
      console.log(this.imageTest)
      this.imageBoolean = true;


      this.artistList.forEach(artist => {
        console.log(artist.images.length > 0 ? artist.images[2].url : "no image found")



      });
      
    }


    this.artistList.forEach(artist => {
      this.htmlYouWantToAdd += "name: " + artist.name + "; followers: " + artist.followers.total + "\n"

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
  
}
