import { Component, OnInit } from '@angular/core';
import { IAlbum } from './album';
import { AlbumService } from './album.service';

@Component({
    selector: "pm-album",
    templateUrl: "album.component.html",
    styleUrls: ["album.component.css"]
  })
  export class AlbumComponent implements OnInit {

    genre: string;
    year: string;
    albumList: IAlbum[] = [];
    albumList2: IAlbum[][] = [];
    
    ngOnInit(): void {
    }

    constructor(private albumService: AlbumService){

    }
    
    searchAlbums(): void {
        this.searchDone = false;
        //this.albumService.setSearchParams(this.genre, this.year);
        this.albumService.searchAlbums().subscribe(res => {
            this.albumList = res['albums']['items'];
            this.albumList2.push(this.albumList);
            console.log(this.albumList2);
        })
    }

    increaseMaxCount(): void {
        this.maxCount += 5;
      }
    
      searchPopUp(): void {
        this.albumList2 = []
        this.searchDone = true;
        this.maxCount = 0;
      }
    
        maxCount: number = 5;
        searchDone: boolean = true;
  }