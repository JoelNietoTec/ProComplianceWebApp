import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParamMatrix } from '../../../shared/models/param-matrices.model';
import { ParamMatricesService } from '../../../shared/services/param-matrices.service';

@Component({
  selector: 'app-param-risk-matrix',
  templateUrl: './param-risk-matrix.component.html'
})

export class ParamRiskMatrixComponent implements OnInit {

  _matrix: ParamMatrix;

  constructor(
    private _route: ActivatedRoute,
    private _matrixService: ParamMatricesService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._matrixService.getMatrix(params['id'])
        .subscribe(data => {
          this._matrix = data;
        });
    });
  }
}
