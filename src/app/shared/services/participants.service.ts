import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Participant, ParticipantParam } from '../models/participants.model';
import { ConnectionService } from './connection.service';

@Injectable()
export class ParticipantsService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private _partURL: string;
  private _paramURL: string;
  private participant: Participant;
  private param: ParticipantParam;
  private _newParam: ParticipantParam;
  private participants: Participant[];
  private newParticipant: Participant;
  private _headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private _http: Http, private _conn: ConnectionService
  ) {
    this._partURL = _conn.APIUrl + 'participants';
    this._paramURL = _conn.APIUrl + 'participantparams';
  };

  getParticipants() {
    return this._http
      .get(this._partURL)
      .map(response => {
        this.participants = response.json();
        return this.participants;
      });
  }

  getParticipant(_id: number) {
    return this._http
      .get(this._partURL + '/' + _id)
      .map(response => {
        this.participant = response.json();
        return this.participant;
      });
  };

  createParticipant(ind: any): Observable<Participant> {
    return this._http
      .post(this._partURL, JSON.stringify(ind), { headers: this.headers })
      .map(response => {
        this.newParticipant = response.json();
        return this.newParticipant;
      });
  }

  updateParam(_id: number, _param: ParticipantParam): Observable<ParticipantParam> {
    return this._http
      .put(this._paramURL + '/' + _id, JSON.stringify(_param), { headers: this._headers })
      .map(response => {
        this._newParam = response.json();
        return this._newParam;
      });
  }



}
