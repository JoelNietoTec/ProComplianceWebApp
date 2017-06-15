import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ConnectionService } from './connection.service';
import { ParamMaster, ParamValue } from './../models/params.models';

@Injectable()
export class ParamTablesService {

  private tablesURL: string;
  private tables: ParamMaster[];
  private table: ParamMaster;
  private newTable: ParamMaster;
  private _headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private _http: Http,
    private _conn: ConnectionService
  ) {
    this.tablesURL = _conn.APIUrl + 'parammasters';
  }

  getTables() {
    return this._http
      .get(this.tablesURL)
      .map(response => {
        this.tables = response.json();
        return this.tables;
      });
  }

  getTable(_id: number) {
    return this._http
      .get(this.tablesURL + '/' + _id)
      .map(response => {
        this.table = response.json();
        return this.table;
      });
  }

  createtable(tab: ParamMaster): Observable<ParamMaster> {
    return this._http
      .post(this.tablesURL, JSON.stringify(tab), { headers: this._headers })
      .map(response => {
        this.newTable = response.json;
        return this.newTable;
      });
  }

}
