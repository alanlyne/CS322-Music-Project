import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';


import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component'
import { ArtistComponent } from './artist/artist.component';
import { SafePipe } from './safe.pipe';
import { AlbumComponent } from './album/album.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ArtistComponent,
    SafePipe,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
