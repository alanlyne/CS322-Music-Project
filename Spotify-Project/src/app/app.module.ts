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
import { CloseComponent } from './close.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    ArtistComponent,
    SafePipe,
    AlbumComponent,
    CloseComponent
  ],
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "close", component: CloseComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
