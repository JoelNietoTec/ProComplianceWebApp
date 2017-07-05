import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParamMatrix } from '../../../shared/models/param-matrices.model';

import { ParamMatricesService } from '../../../shared/services/param-matrices.service';

@Component({
  moduleId: module.id,
  selector: 'param-matrix-details',
  templateUrl: './param-matrix-details.component.html',
  styleUrls: ['./param-matrix-details.component.css']
})

export class ParamMatrixDetailsComponent implements OnInit {

  _matrix: ParamMatrix;

  constructor(
    private _route: ActivatedRoute,
    private _matrixService: ParamMatricesService
  ) { }

  ngOnInit() {
    this.initMatrix();
  }

  initMatrix() {
    this._route.params.subscribe(params => {
      this._matrixService.getMatrix(params['id'])
      .subscribe(data => {
        this._matrix = data;
      });
    });
  }
}
