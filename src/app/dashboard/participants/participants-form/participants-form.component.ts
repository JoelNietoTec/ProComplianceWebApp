import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { Participant, ParticipantType } from '../../../shared/models/participants.model';
import { ParticipantsService } from '../../../shared/services/participants.service';
import { GendersService } from '../../../shared/services/genders.service';
import { Gender } from '../../../shared/models/genders.model';

// interface ParticipantForm extends Participant {
//   formBirthDate?: NgbDateStruct;
// };

@Component({
  selector: 'participants-form',
  templateUrl: './participants-form.component.html',
  styleUrls: ['./participants-form.component.css']
})
export class ParticipantsFormComponent implements OnInit {

  // _participant: ParticipantForm;
  // private birthdate: string;
  // genders: Gender[];
  _types: ParticipantType[];
  _type: ParticipantType;
  _default: any = undefined;

  constructor(
    private _gendersService: GendersService,
    private _partServ: ParticipantsService,
    // private _dateFormatter: NgbDateParserFormatter,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    // const id: string = _route.snapshot.params.id;
    // const url: string = _route.snapshot.url.toString();
    // const parent: string = _route.snapshot.parent.url.toString();
    // const user = _route.snapshot.data.user;

    // console.log(url);
    // console.log(parent);

    this._types = [
      {
        ID: 1,
        EnglishName: 'Individual',
        Name: 'Individuo'
      },
      {
        ID: 2,
        EnglishName: 'Entity',
        Name: 'Entidad'
      }
    ];

  }

  ngOnInit() {

    // this._participant = {};

    // this._gendersService.getGenders()
    //   .subscribe(data => {
    //     this.genders = data;
    //   });
  };

  // changeType() {
  //   console.log(this._type);
  // }

  // saveParticipant() {
  //   this._participant.BirthDate = new Date(this._dateFormatter.format(this._participant.formBirthDate));
  //   console.log(this._participant);
  //   this._partServ.createParticipant(this._participant)
  //     .subscribe(data => {
  //       console.log(data);
  //       this._router.navigate(['/Participants', data.ID]);
  //     });
  // };

};
