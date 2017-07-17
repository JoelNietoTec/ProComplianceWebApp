import { Component, OnInit, Input } from '@angular/core';
import { Participant } from '../../../shared/models/participants.model';

@Component({
  selector: 'entities-list',
  templateUrl: './entities-list.component.html'
})

export class EntitiesListComponent implements OnInit {

  @Input() entities: Participant[];

  constructor() { }

  ngOnInit() { }
}
