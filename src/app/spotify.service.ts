import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/publishLast'

@Injectable()
export class SpotifyAPIService {
  client_id = "0663297f90e8461e858b875704a8e2cc";
  client_secret = "93cd5b96e3a3470b9061eac5d7227c0d";
  user_id = "1164588612";
  playlist_id = "3hiWqvc2rQw8Vd8WVN1qsP";

  private accessToken: any;
  private tokenType: string;

  constructor(private http: Http) { }

  login() {
    let authorizationTokenUrl = `https://myproxi.herokuapp.com/` + `https://accounts.spotify.com/api/token`;
    // let authorizationTokenUrl = `/api/token`;

    let header = new Headers();
    header.append('Authorization', 'Basic  ' + btoa(this.client_id + ':' + this.client_secret));
    header.append('Content-Type', 'application/x-www-form-urlencoded;');

    let options = new RequestOptions({ headers: header });
    let body = 'grant_type=client_credentials';


    return this.http.post(authorizationTokenUrl, body, options)
      .map(data => data.json())
      .do(token => {
        this.accessToken = token.access_token;
        this.tokenType = token.token_type;
      }, error => console.log(error));
  }

  searchAlbums(title: string) {
    const options = this.getOptions();
    return this.http.get(`https://myproxi.herokuapp.com/` + `https://api.spotify.com/v1/search?query=${title}&type=album`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }

  searchArtist(title: string) {
    const options = this.getOptions();
    return this.http.get(`https://myproxi.herokuapp.com/` + `https://api.spotify.com/v1/search?query=${title}&type=artist&market=US&offset=0&limit=20`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }

  loadAlbum(id) {
    const options = this.getOptions();
    return this.http.get(`https://myproxi.herokuapp.com/` + `https://api.spotify.com/v1/albums/${id}`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }

  getArtist(id: string) {
    const options = this.getOptions();
    return this.http.get(`https://myproxi.herokuapp.com/` + `https://api.spotify.com/v1/artists/${id}`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }

  getAlbums(id: string) {
    const options = this.getOptions();
    return this.http.get(`https://myproxi.herokuapp.com/` + `https://api.spotify.com/v1/artists/${id}/albums?album_type=single,album&market=NL`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }
  private getOptions() {

    let header = new Headers();
    header.append('Authorization', this.tokenType + ' ' + this.accessToken);
    let options = new RequestOptions({ headers: header });

    return options;
  }

  addSongs(id: string){

    const options = this.getOptions();
    return this.http.post(`https://myproxi.herokuapp.com/` + `https://api.spotify.com/v1/users/${this.user_id}/playlists/${this.playlist_id}/tracks?position=0&uris=spotify%3Atrack%3A${id}`, options)
      .map(res => res.json())
      .publishLast()
      .refCount()
  }
}
