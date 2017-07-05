import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { ParamTable } from '../../../shared/models/params.models';
import { ParamMatrix } from '../../../shared/models/param-matrices.model';
import { ParamMatricesService } from '../../../shared/services/param-matrices.service';
import { UtilitiesService } from '../../../shared/services/utilities.service';

@Component({
  selector: 'participants-compliance',
  templateUrl: './participants-compliance.component.html',
  styleUrls: ['./participants-compliance.component.css']
})

export class ParticipantsComplianceComponent implements OnInit {
  public matrixForm: FormGroup;
  _matrix: ParamMatrix;
  _matrices: ParamMatrix[];

  constructor(
    private _matrixService: ParamMatricesService,
    private _util: UtilitiesService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this._matrixService.getMatrices()
      .subscribe(data => {
        this._matrices = data;
      });
  }
}
