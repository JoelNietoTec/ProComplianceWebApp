import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { ConnectionService } from './connection.service';
import { ParamCategory } from '../models/params.models';


@Injectable()
export class ParamCategoriesService {

  private categoryURL: string;
  private categories: ParamCategory[];
  private newCategory: ParamCategory;
  private _headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http,
    private _conn: ConnectionService) {
    this.categoryURL = _conn.APIUrl + 'paramcategories';
  }

  getCategories() {
    return this.http
      .get(this.categoryURL)
      .map(response => {
        this.categories = response.json();
        return this.categories;
      });
  }

  createCategory(cat: ParamCategory): Observable<ParamCategory> {
    return this.http
      .post(this.categoryURL, JSON.stringify(cat), { headers: this._headers })
      .map(response => {
        this.newCategory = response.json();
        return this.newCategory;
      });
  }

}
