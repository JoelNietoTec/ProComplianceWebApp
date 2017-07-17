import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Participant } from '../../../shared/models/participants.model';
import { Gender } from '../../../shared/models/genders.model';
import { ParticipantsService } from '../../../shared/services/participants.service';
import { UtilitiesService } from '../../../shared/services/utilities.service';

interface ParticipantData extends Participant {
  Age?: number;
}

@Component({
  moduleId: module.id,
  selector: 'participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.css']
})

export class ParticipantDetailsComponent implements OnInit {

  _participant: ParticipantData;

  constructor(
    private _route: ActivatedRoute,
    private _partServ: ParticipantsService,
    private _util: UtilitiesService
  ) {

  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this._partServ.getParticipant(params['id'])
        .subscribe(data => {
          this._participant = data;
          this._participant.Age = this._util.getAge(this._participant.BirthDate);
          this._partServ.getScore(this._participant.ID)
            .subscribe(dataif => {
              this._participant.Score = dataif;
            });
        });
    });
  }
}
