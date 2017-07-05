import { Component, OnInit, Input } from '@angular/core';

import { ParamTablesService } from '../../../shared/services/param-tables.service';
import { ParamTable, ParamValue } from '../../../shared/models/params.models';

@Component({
  moduleId: module.id,
  selector: 'param-table-simple',
  templateUrl: './param-table-simple.component.html',
  styleUrls: ['./param-table-simple.component.css']
})

export class ParamTableSimpleComponent implements OnInit {
  @Input() _table: ParamTable;

  _newValue: ParamValue;
  _currentValue: ParamValue;
  _saving: Boolean = false;
  _editing: Boolean;

  constructor(
    private _tableService: ParamTablesService
  ) { }

  ngOnInit() {
    this._newValue = {};
    this._currentValue = {};
    this._editing = false;
  }
  onSubmit() {
    this._saving = true;
    this._newValue.ParamTableID = this._table.ID;
    console.log(this._newValue);
    this._tableService.addValue(this._newValue)
      .subscribe(data => {
        console.log(data);
        this._saving = false;
        this._table.ParamValues.push(data);
        this._newValue = {};
      });
  }

  editValue(val: ParamValue) {
    this._editing = true;
    this._currentValue = val;
    window.scroll(0, 0);
  }

  onSaveValue() {
    this._saving = true;
    this._tableService.editValue(this._currentValue.ID, this._currentValue)
      .subscribe(data => {
        console.log(data);
        this._saving = false;
        this._editing = false;
        this._currentValue = {};
      });
  }

}
