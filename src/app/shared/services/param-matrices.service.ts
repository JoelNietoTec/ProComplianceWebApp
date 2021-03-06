import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { ConnectionService } from './connection.service';
import { ParamMatrix } from '../models/param-matrices.model';

@Injectable()
export class ParamMatricesService {

  private matrixURL: string;
  private newMatrix: ParamMatrix;
  private matrix: ParamMatrix;
  private matrices: ParamMatrix[];
  private _headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(
    private http: Http,
    private _conn: ConnectionService) {
    this.matrixURL = _conn.APIUrl + 'parammatrices';
  }

  getMatrices() {
    return this.http
      .get(this.matrixURL)
      .map(response => {
        this.matrices = response.json();
        return this.matrices;
      });
  }

  getMatrix(_id: number) {
    return this.http
      .get(this.matrixURL + '/' + _id)
      .map(response => {
        this.matrix = response.json();
        return this.matrix;
      });
  }

  createMatrix(mat: any): Observable<ParamMatrix> {
    return this.http
      .post(this.matrixURL, JSON.stringify(mat), { headers: this._headers })
      .map(response => {
        this.newMatrix = response.json();
        return this.newMatrix;
      });
  }

}
