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

  constructor(
    private _partServ: ParticipantsService
  ) { }

  ngOnInit() {
    this._partServ.getParticipants()
      .subscribe(data => {
        this._participants = data;
      });
  }

}
