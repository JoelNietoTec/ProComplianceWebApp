import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Participant } from '../models/participants.model';
import { ConnectionService } from './connection.service';

@Injectable()
export class ParticipantsService {

  private headers = new Headers({ 'Content-Type': 'application/json' });

  private participantURL: string;

  private participant: Participant;

  private participants: Participant[];

  private newParticipant: Participant;

  constructor(
    private http: Http, private _conn: ConnectionService
  ) {
    this.participantURL = _conn.APIUrl + 'participants';
  };

  getParticipants() {
    return this.http
      .get(this.participantURL)
      .map(response => {
        this.participants = response.json();
        return this.participants;
      });
  }

  getParticipant(_id: number) {
    return this.http
      .get(this.participantURL + '/' + _id)
      .map(response => {
        this.participant = response.json();
        return this.participant;
      });
  };

  createParticipant(ind: any): Observable<Participant> {
    return this.http
      .post(this.participantURL, JSON.stringify(ind), { headers: this.headers })
      .map(response => {
        this.newParticipant = response.json();
        return this.newParticipant;
      });
  }

}
