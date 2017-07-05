import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';


import { Participant } from '../../../shared/models/participants.model';
import { ParticipantsService } from '../../../shared/services/participants.service';
import { GendersService } from '../../../shared/services/genders.service';
import { Gender } from '../../../shared/models/genders.model';

interface ParticipantForm extends Participant {
  formBirthDate?: NgbDateStruct;
};

@Component({
  selector: 'participants-form',
  templateUrl: './participants-form.component.html',
  styleUrls: ['./participants-form.component.css']
})
export class ParticipantsFormComponent implements OnInit {

  _participant: ParticipantForm;
  private birthdate: string;
  genders: Gender[];

  constructor(
    private _gendersService: GendersService,
    private _partServ: ParticipantsService,
    private _dateFormatter: NgbDateParserFormatter,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    const id: string = _route.snapshot.params.id;
    const url: string = _route.snapshot.url.toString();
    const parent: string = _route.snapshot.parent.url.toString();
    const user = _route.snapshot.data.user;

    console.log(url);
    console.log(parent);

  }

  ngOnInit() {

    this._participant = {};

    this._gendersService.getGenders()
      .subscribe(data => {
        this.genders = data;
      });
  };

  saveParticipant() {
    this._participant.BirthDate = new Date(this._dateFormatter.format(this._participant.formBirthDate));
    console.log(this._participant);
    this._partServ.createParticipant(this._participant)
      .subscribe(data => {
        console.log(data);
        this._router.navigate(['/Participants', data.ID]);
      });
  };

};
