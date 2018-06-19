/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
}

*/


import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import 'rxjs/add/operator/map';
import './rxjs-operators';
import { map } from 'rxjs/operators';


@Injectable()
export class SharedService {
    findMovieURL1 = "http://www.omdbapi.com/?t=";
    findMovieURL2 = "&y=&plot=short&r=json"; 
    totReqsMade: number = 0;
    constructor(private _http: Http) { }
 
    findMovie(movie) { 
        this.totReqsMade = this.totReqsMade + 1; 
        return this._http.get(this.findMovieURL1 + movie + this.findMovieURL2)
            .pipe(map(response => {
                { return response.json() };
            }))
         /*   .catch(error => Observable.throw(error.json().error));*/
    }
}