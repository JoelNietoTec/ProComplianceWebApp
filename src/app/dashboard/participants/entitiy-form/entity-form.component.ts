import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Participant, ParticipantType } from '../../../shared/models/participants.model';
import { Gender } from '../../../shared/models/genders.model';
import { ParticipantsService } from '../../../shared/services/participants.service';

interface Entity extends Participant {
  formBirthDate?: NgbDateStruct;
}

const NOW = new Date();

@Component({
  selector: 'entity-form',
  templateUrl: './entity-form.component.html',
  styleUrls: ['./entity-form.component.css']
})

export class EntityFormComponent implements OnInit {

  _entity: Entity;
  private birthdate: string;
  _default: any = undefined;
  _maxDate: any;
  _minDate: any;

  constructor(
    private _partServ: ParticipantsService,
    private _dateFormatter: NgbDateParserFormatter,
    private _router: Router
  ) {
    this._maxDate = {
      year: NOW.getFullYear() + 1,
      month: 1
    };

    this._minDate = {
      year: NOW.getFullYear() - 100,
      month: 1
    };
  }

  ngOnInit() {
    this._entity = {
      ParticipantTypeID: 2,
      GenderID: 1
    };
  }

  saveEntity() {
    this._entity.BirthDate = new Date(this._dateFormatter.format(this._entity.formBirthDate));
    console.log(this._entity);
    this._partServ.createParticipant(this._entity)
      .subscribe(data => {
        this._router.navigate(['/Participants', data.ID]);
      });
  }
}
