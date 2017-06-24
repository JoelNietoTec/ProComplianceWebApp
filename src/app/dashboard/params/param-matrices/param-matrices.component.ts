import { Component, OnInit } from '@angular/core';

import { ParamMatrix, MatrixType } from '../../../shared/models/param-matrices.model';
import { ParamMatricesService } from '../../../shared/services/param-matrices.service';
import { MatrixTypesService } from '../../../shared/services/matrix-types.service';

@Component({
  selector: 'app-param-matrices',
  templateUrl: './param-matrices.component.html',
  styleUrls: ['./param-matrices.component.css']
})
export class ParamMatricesComponent implements OnInit {
  _showNewMatrix: boolean;
  matrices: ParamMatrix[];
  newMatrix: ParamMatrix = {};
  matrixTypes: MatrixType[];

  constructor(
    private _matrixService: ParamMatricesService,
    private _typesService: MatrixTypesService
  ) { }

  ngOnInit() {
    this._matrixService.getMatrices()
      .subscribe(data => {
        this.matrices = data;
      });

    this._typesService.getMatrixTypes()
      .subscribe(data => {
        this.matrixTypes = data;
      });
  }

  onSubmit() {
    this.newMatrix.CreateDate = new Date();

    this._matrixService.createMatrix(this.newMatrix)
      .subscribe(data => {
        console.log(data);
        this.matrices.push(data);
        console.log(this.matrices);
        this.newMatrix = {};
      });
  }

  addMatrix() {
      this._showNewMatrix = !this._showNewMatrix;
      console.log(this._showNewMatrix);
    }
}
