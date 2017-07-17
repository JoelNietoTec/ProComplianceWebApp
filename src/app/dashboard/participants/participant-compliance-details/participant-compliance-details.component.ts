import { Component, OnInit, Input } from '@angular/core';

import { Participant, ParticipantParam } from '../../../shared/models/participants.model';
import { ParamMatrix } from '../../../shared/models/param-matrices.model';


import { UtilitiesService } from '../../../shared/services/utilities.service';

@Component({
  selector: 'participant-compliance-details',
  templateUrl: './participant-compliance-details.component.html',
  styleUrls: ['./participant-compliance-details.component.css']
})

export class ParticipantComplianceDetailsComponent implements OnInit {
  @Input() participant: Participant;

  _matrix: ParamMatrix;

  constructor(
    private _util: UtilitiesService
  ) { }

  ngOnInit() {
    this.participant.ParticipantParams = this._util.sortBy(this.participant.ParticipantParams, 'ParamCategoryID, ParamID');
  }



}
