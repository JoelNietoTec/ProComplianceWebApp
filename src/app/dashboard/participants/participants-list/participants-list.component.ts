import { Component, OnInit } from '@angular/core';

import { Participant } from '../../../shared/models/participants.model';
import { ParticipantsService } from '../../../shared/services/participants.service';

@Component({
  selector: 'participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {

  _participants: Participant[];
  _entities: Participant[];
  _individuals: Participant[];

  constructor(
    private _partServ: ParticipantsService
  ) { }

  ngOnInit() {
    this._partServ.getParticipants()
      .subscribe(data => {
        this._participants = data;
        this.classify();
      });
  }

  classify() {
    this._entities = this._participants.filter(item => item.ParticipantTypeID === 2);
    this._individuals = this._participants.filter(item => item.ParticipantTypeID === 1);
  }

}
