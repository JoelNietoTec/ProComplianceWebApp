import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ConnectionService } from './connection.service';
import { ParamTable, ParamValue, ParamSubValue } from './../models/params.models';

@Injectable()
export class ParamTablesService {

  private tablesURL: string;
  private valuesURL: string;
  private subValuesURL: string;
  private tables: ParamTable[];
  private table: ParamTable;
  private newTable: ParamTable;
  private newValue: ParamValue;
  private newSubValue: ParamSubValue;
  private _headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private _http: Http,
    private _conn: ConnectionService
  ) {
    this.tablesURL = _conn.APIUrl + 'paramtables';
    this.valuesURL = _conn.APIUrl + 'paramvalues';
    this.subValuesURL = _conn.APIUrl + 'paramsubvalues';
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

  createtable(tab: ParamTable): Observable<ParamTable> {
    return this._http
      .post(this.tablesURL, JSON.stringify(tab), { headers: this._headers })
      .map(response => {
        this.newTable = response.json();
        return this.newTable;
      });
  }

  addValue(val: ParamValue): Observable<ParamValue> {
    return this._http
      .post(this.valuesURL, JSON.stringify(val), { headers: this._headers })
      .map(response => {
        this.newValue = response.json();
        return this.newValue;
      });
  }

  addSubValue(val: ParamSubValue): Observable<ParamSubValue> {
    return this._http
      .post(this.subValuesURL, JSON.stringify(val), { headers: this._headers })
      .map(response => {
        this.newSubValue = response.json();
        return this.newSubValue;
      });
  }

  editValue(_id: number, _val: ParamValue): Observable<ParamValue> {
    return this._http
      .put(this.valuesURL + '/' + _id, JSON.stringify(_val), { headers: this._headers })
      .map(response => {
        this.newValue = response.json();
        return this.newValue;
      });
  }


}
