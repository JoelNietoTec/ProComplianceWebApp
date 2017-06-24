import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParamTablesService } from '../../../shared/services/param-tables.service';
import { ParamTable, ParamValue } from '../../../shared/models/params.models';

@Component({
  moduleId: module.id,
  selector: 'app-param-table',
  templateUrl: 'param-table.component.html',
  styleUrls: ['./param-table.component.css']
})

export class ParamTableComponent implements OnInit {

  _table: ParamTable;
  _newValue: ParamValue;
  _currentValue: ParamValue;
  _saving: boolean = false;
  _editing: boolean;

  constructor(
    private _route: ActivatedRoute,
    private _tableService: ParamTablesService
  ) { }

  ngOnInit() {
    this.initTable();
    this._newValue = {};
    this._currentValue = {};
    this._editing = false;
  }

  initTable() {
    this._table = {};
    this._route.params.subscribe(params => {
      this._tableService.getTable(params['id'])
        .subscribe(data => {
          this._table = data;
          console.log(data);
        });
    });
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
        this.initTable();
        this._editing = false;
        this._currentValue = {};
      });
  }
}
