import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import {RouterModule} from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from './spotify.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'about',component:AboutComponent},
      {path:'search',component:SearchComponent},
    ]),
    FormsModule,
    HttpClientModule
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
