import { Component, OnInit } from '@angular/core';

import { ParamTablesService } from '../../../shared/services/param-tables.service';
import { ParamTable, ParamValue } from '../../../shared/models/params.models';

@Component({
  selector: 'app-param-tables',
  templateUrl: 'param-tables.component.html',
  styleUrls: ['./param-tables.component.css']
})

export class ParamTablesComponent implements OnInit {

  tables: ParamTable[];
  _showNewTable: boolean;
  newTable: ParamTable = {};
  _saving: boolean = false;

  constructor(
    private _tablesService: ParamTablesService
  ) { }

  ngOnInit() {
    this._tablesService.getTables()
      .subscribe(data => {
        this.tables = data;
        console.log(data);
      });
  }

  onSubmit() {
    this._saving = true;
    this.newTable.CreateDate = new Date();

    this._tablesService.createtable(this.newTable)
      .subscribe(data => {
        console.log(data);
        this.tables.push(data);
        this.newTable = {};
        this._saving = false;
      });
  }

  addTable() {
    this._showNewTable = !this._showNewTable;
  }
}
