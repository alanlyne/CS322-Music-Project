import { Component, OnInit, Input } from "@angular/core";
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
  obscurity: number;
  artistList: IArtist[] = [];
  artistList2: IArtist[][] = [];
  newGenreCheck: boolean;
  noResults: boolean;
  oneSearchDone: boolean = false;
  genreList1: string[];
  newSearch: boolean = false;
  maxCount: number = 5;
  searchDone: boolean = false;
  htmlYouWantToAdd: string = "";

  @Input()
  loggedIn: boolean = false;

  constructor(private artistService: ArtistService) {}

  ngOnInit(): void {
    this.artistService.getGenres().subscribe(data => {
      this.genreList1 = data;
    });
  }
  //Follow and Unfollow Artists
  followArtist(i: number, j: number): void { 
    let artist = this.artistList2[i][j];
    artist.following = !artist.following;
    if(artist.following){
      this.artistService.followArtist(artist.id).subscribe(data => {
        console.log("Following " + artist.name);
      });
    } else {
      this.artistService.unfollowArtist(artist.id).subscribe(data => {
        console.log("Unfollowing " + artist.name);
      })
    }
  }
  //Close search box with X
  closeSearch(): void {
    this.searchDone = true;
  }
  //Search for Artists with Users Inputs
  search(): void {
    this.oneSearchDone = true;
    this.newGenreCheck = true;
    this.noResults = false;
    //Loop through genre list check if previously there
    for(var i = 0; i< this.genreList1.length; i++) {
      if(this.genre == this.genreList1[i]) {
        this.newGenreCheck = false;
        break;
      }
    }
    this.artistList2 = []
    this.searchDone = true;
    this.noResults = false;
    //Set parameters for backend query
    this.artistService.setSearchParams(this.genre.trim().replace(/\s/g, "-"), this.year, this.obscurity, true);
    this.artistService.SearchArtist().subscribe(res => {
      //Array of artist objects
      this.artistList = res["artists"]["items"];
      //If results found and genre not previously in list add new genre to list for autocomplete
      this.artistList.length > 0 && this.newGenreCheck == true ? this.genreList1.push(this.genre.trim().replace(/\s/g, "-")) && console.log("New Genre Added: " + this.genre.trim().replace(/\s/g, "-")) : "" ;
      this.artistList.length == 0 ? this.noResults = true : this.noResults = false;
        for(var i = 0; i<this.artistList.length; i++) {
          this.artistList[i].topSongs = "https://open.spotify.com/embed/artist/" + this.artistList[i].id;
          this.artistList[i].followButtonVisible = true;
        }
      this.artistList2.push(this.artistList);
      return this.htmlYouWantToAdd;
    })
  }
  //Fetch 5 more results for users search
  viewMore(): void {
    this.searchDone = true;
    this.artistService.setSearchParams(this.genre, this.year, this.obscurity, false);
    this.artistService.SearchArtist().subscribe(res => {
      //Array of artist objects
      this.artistList = res["artists"]["items"];
      for(var i = 0; i<this.artistList.length; i++) {
        this.artistList[i].topSongs = "https://open.spotify.com/embed/artist/" + this.artistList[i].id;
        this.artistList[i].followButtonVisible = true;
      }
      this.artistList2.push(this.artistList);
    });
  }
  //Reopen Search Box
  searchPopUp(): void {
    this.searchDone = false;
    this.newSearch = true;
    this.maxCount = 0;
  }
  //Toggle between Artist Cover photo or top songs
  viewArtistCover(id: string, i: number, j: number): void {
    let artist = this.artistList2[i][j];
    artist.following = !artist.following;
    artist.followButtonVisible = !artist.followButtonVisible;
    var img = document.getElementById("img"+id);
    var ifr = document.getElementById("ifr"+id);
    if (img.style.display === "none") {
      img.style.display = "unset";
      ifr.style.display = "none";
    } else {
      ifr.style.display = "unset";
      img.style.display = "none";
    }
  }
}


