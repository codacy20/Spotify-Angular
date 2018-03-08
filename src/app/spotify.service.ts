import { Injectable } from '@angular/core';
// import { Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class SpotifyService {

  private url:string;

  // constructor(private _http:Http) { }

  searchMusic(str:string,type='artist'){
    console.log('weel shitt');
    // this.url = "https://api.spotify.com/v1/search?query="+str+"&type=artist&market=US&offset=0&limit=5";
    // return this._http.get(this.url).map( res => res.json());
  }
}
