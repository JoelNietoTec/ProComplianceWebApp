import { Component, OnInit, Input } from '@angular/core';

import { ParamTablesService } from '../../../shared/services/param-tables.service';
import { ParamTable, ParamValue, ParamSubValue } from '../../../shared/models/params.models';

@Component({
  moduleId: module.id,
  selector: 'param-table-complex',
  templateUrl: './param-table-complex.component.html',
  styleUrls: ['./param-table-complex.component.css']
})

export class ParamTableComplexComponent implements OnInit {
  @Input() _table: ParamTable;

  _newValue: ParamValue;
  _currentValue: ParamValue;
  _saving: Boolean;
  _editing: Boolean;

  constructor(
    private _tableService: ParamTablesService
  ) { }

  ngOnInit() {
    this._newValue = {};
  }

  onSubmit() {
    this._newValue.ParamTableID = this._table.ID;
    this._tableService.addValue(this._newValue)
    .subscribe(data => {
      this._table.ParamValues.push(data);
      this._newValue = {};
    });
  }
}
