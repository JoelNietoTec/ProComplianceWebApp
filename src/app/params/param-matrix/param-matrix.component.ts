import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParamMatrix } from '../../shared/models/param-matrices.model';
import { ParamCategory, ParamMaster, ParamValue } from '../../shared/models/params.models';
import { ParamMatricesService } from '../../shared/services/param-matrices.service';
import { ParamCategoriesService } from '../../shared/services/param-categories.service';

@Component({
  moduleId: module.id,
  selector: 'app-param-matrix',
  templateUrl: './param-matrix.component.html',
  styleUrls: ['./param-matrix.component.css']
})

export class ParamMatrixComponent implements OnInit {

  _matrix: ParamMatrix;
  _newCategory: ParamCategory;

  constructor(
    private _route: ActivatedRoute,
    private _matrixService: ParamMatricesService,
    private _categoryService: ParamCategoriesService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._matrixService.getMatrix(params['id'])
        .subscribe(data => {
          this._matrix = data;
          console.log(this._matrix);
        });
    });
    this._newCategory = {};
  }

  addCategory() {
    this._newCategory.MatrixID = this._matrix.ID;
    this._matrix.ParamCategories.push(this._newCategory);
    console.log(this._matrix);
    this._newCategory = {};
  }

  saveCategories() {
    this._matrix.ParamCategories.forEach(element => {
      this._categoryService.createCategory(element)
        .subscribe(data => {
          console.log(data);
          this._newCategory = {};
        });
    });
  }
}
