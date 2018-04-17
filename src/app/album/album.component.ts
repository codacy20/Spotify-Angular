import { Component, OnInit, NgModule } from '@angular/core';
import { SpotifyAPIService } from '../spotify.service';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../album';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: Album;
  id: string;


  constructor(private _spotifyService: SpotifyAPIService, private _route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this._route.snapshot.params.id;
    this._spotifyService.login()
      .subscribe(() => {
        this.getAlbum(this.id);
      });
  }

  getAlbum(id: string) {
    this._spotifyService.loadAlbum(id)
      .subscribe(res => {
        this.album = res;
        console.log(this.album);
      });
  }

  addSongInit(id: string) {

    this._spotifyService.login()
      .subscribe(() => {
        this.addSongs(id);
      });
  }

  addSongs(id:string){

    this._spotifyService.addSongs(id)
    .subscribe(res => {
      console.log(res);
    });
  }

}