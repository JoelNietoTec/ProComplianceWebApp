import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MatrixType } from '../models/param-matrices.model';
import { ConnectionService } from './connection.service';

@Injectable()
export class MatrixTypesService {
  private matrixTypeURL: string;
  private matrixTypes: MatrixType[];

  constructor(private http: Http, private _conn: ConnectionService) {
    this.matrixTypeURL = _conn.APIUrl + 'MatrixTypes';
  };

  getMatrixTypes() {
    return this.http
      .get(this.matrixTypeURL)
      .map(response => {
        this.matrixTypes = response.json();
        return this.matrixTypes;
      });
  }
}
