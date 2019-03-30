import { Component, OnInit } from "@angular/core";
import { Artist, Album } from "../album";
import { SpotifyAPIService } from "../spotify.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styleUrls: ["./artist.component.css"]
})
export class ArtistComponent implements OnInit {
  id: string;
  artist: Artist[];
  albums: Album[];

  constructor(
    private _spotifyService: SpotifyAPIService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this._spotifyService.login().subscribe(() => {
      this.getArtist(this.id);
    });
    this._spotifyService.login().subscribe(() => {
      this.getAlbums(this.id);
    });
  }

  getArtist(id: string) {
    this._spotifyService.getArtist(id).subscribe(res => {
      this.artist = res;
    });
  }

  getAlbums(id: string) {
    this._spotifyService.getAlbums(id).subscribe(res => {
      this.albums = res.items;
    });
  }
}
