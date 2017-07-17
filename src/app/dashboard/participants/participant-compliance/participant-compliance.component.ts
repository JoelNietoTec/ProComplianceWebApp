import { Component, OnInit, Input } from '@angular/core';

import { ParamTable } from '../../../shared/models/params.models';
import { ParamMatrix } from '../../../shared/models/param-matrices.model';
import { Participant } from '../../../shared/models/participants.model';
import { ParamMatricesService } from '../../../shared/services/param-matrices.service';
import { UtilitiesService } from '../../../shared/services/utilities.service';

@Component({
  selector: 'participant-compliance',
  templateUrl: './participant-compliance.component.html',
  styleUrls: ['./participant-compliance.component.css']
})

export class ParticipantComplianceComponent implements OnInit {
  @Input() participant: Participant;

  _matrix: ParamMatrix;
  _matrices: ParamMatrix[];

  constructor(
    private _matrixService: ParamMatricesService,
    private _util: UtilitiesService
  ) { }

  ngOnInit() {
    // this._matrix = this.participant.ParamMatrix;
    this._matrixService.getMatrix(this.participant.ParamMatrixID)
      .subscribe(data => {
        this._matrix = data;
        this._matrix.ParamCategories = this._util.sortBy(this._matrix.ParamCategories, 'EnglishName');
        for (let i of this._matrix.ParamCategories) {
          i.Params = this._util.sortBy(i.Params, 'EnglishName');
        }
      });
  }

  changeMatrix() {
    console.log(this._matrix);
  }

}
