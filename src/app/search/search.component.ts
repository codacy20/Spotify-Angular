import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from '../spotify.service';
import { Album } from '../album';
import { Artist } from '../album';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr: string;
  searchRes: Artist[];

  constructor(private _spotifyService: SpotifyAPIService) { }

  ngOnInit() {
  }

  searchMusic(): void {
    // console.log(this.searchStr); //reading the string from the search box
    this._spotifyService.login()
      .subscribe(() => {
        this.searchArtists(this.searchStr);
      });
  }

  searchArtists(author: string) {
    this._spotifyService.searchArtist(author)
      .subscribe(res => {
        this.searchRes = res.artists.items
        // console.log(this.searchRes);
      });
  }
}
