import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyAPIService } from './spotify.service';
import { HttpModule } from '@angular/http';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'/search',pathMatch:'full'},
      {path:'about',component:AboutComponent},
      {path:'search',component:SearchComponent},
      {path:'artist/:id',component:ArtistComponent},
      {path:'album/:id',component:AlbumComponent}
    ]),
    HttpModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SpotifyAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
