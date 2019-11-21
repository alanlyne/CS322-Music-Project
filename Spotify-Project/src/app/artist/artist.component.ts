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

  constructor(private artsitService: ArtistService) {}
  ngOnInit(): void {
    this.artistList[0] = []
  }

  getArtists(): void {
    let fiveartist = this.artsitService.getArtists(this.artistList[0].length*this.artistList.length);
    if(this.artistList[0].length == 0){
      this.artistList[0] = fiveartist
    }else{
      this.artistList.push(fiveartist);
    }
    console.log(this.artistList);
    //console.log(this.artistList[0].images[0].url);

    // if(this.artistList[0].images[0].url != "") {
    //   this.imageTest = this.artistList[0].images[2].url;
    //   //this.artistLink = this.artistList[0].external_urls.spotify;
    //   this.artistName = this.artistList[0].name;
    //   console.log(this.imageTest)
    //   this.imageBoolean = true;


    //   this.artistList.forEach(artist => {
    //     console.log(artist.images.length > 0 ? artist.images[2].url : "no image found")



    //   });

    //}


    this.artistList.forEach(artists => {
      artists.forEach(artist =>{
        this.htmlYouWantToAdd += "name: " + artist.name + "; followers: " + artist.followers.total + "\n"

      })

    });
  }


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
