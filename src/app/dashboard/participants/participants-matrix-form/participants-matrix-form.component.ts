import { Component, OnInit, Input } from '@angular/core';
import { Form, FormArray, FormArrayName } from '@angular/forms';

import { ParamMatrix } from '../../../shared/models/param-matrices.model';

@Component({
  selector: 'participants-matrix-form',
  templateUrl: './participants-matrix-form.component.html',
  styleUrls: ['./participants-matrix-form.component.css']
})

export class ParticipantsMatrixFormComponent implements OnInit {

  @Input() _matrix: ParamMatrix;

  constructor() { }

  ngOnInit() { }
}
