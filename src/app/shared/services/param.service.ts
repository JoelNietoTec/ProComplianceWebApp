import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ConnectionService } from './connection.service';
import { Param } from '../models/params.models';

@Injectable()
export class ParamsService {

  private paramURL: string;
  private _headers = new Headers({ 'Content-Type': 'application/json' });
  private _newParam: Param;

  constructor(
    private _http: Http,
    private _conn: ConnectionService
  ) {
    this.paramURL = _conn.APIUrl + 'params';
  }

  addParams(par: Param): Observable<Param> {
    return this._http
      .post(this.paramURL, JSON.stringify(par), { headers: this._headers })
      .map(response => {
        this._newParam = response.json();
        return this._newParam;
      });
  }

}
