import { Component, OnInit, Input } from '@angular/core';

import { ParamTable, ParamSubValue, ParamValue } from '../../../shared/models/params.models';
import { ParamTablesService } from '../../../shared/services/param-tables.service';

@Component({
  selector: 'param-value',
  templateUrl: './param-value.component.html',
  styleUrls: ['./param-value.component.css']
})

export class ParamValueComponent implements OnInit {
  @Input() _value: ParamValue;

  _newSubValue: ParamSubValue;
  _saving: Boolean = false;

  constructor(
    private _tableService: ParamTablesService
  ) {
    this._newSubValue = {};
  }

  ngOnInit() { }

  addValue() {
    this._newSubValue.ParamValueID = this._value.ID;
    this._tableService.addSubValue(this._newSubValue)
      .subscribe(data => {
        this._value.ParamSubValues.push(data);
        this._newSubValue = {};
      });
  }
}
