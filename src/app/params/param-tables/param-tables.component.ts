import { Component, OnInit } from '@angular/core';

import { ParamTablesService } from '../../shared/services/param-tables.service';
import { ParamMaster } from '../../shared/models/params.models';

@Component({
  selector: 'app-param-tables',
  templateUrl: 'param-tables.component.html',
  styleUrls: ['./param-tables.component.css']
})

export class ParamTablesComponent implements OnInit {

  tables: ParamMaster[];
  _showNewTable: boolean;
  newTable: ParamMaster ={};

  constructor(
    private _tablesService: ParamTablesService
  ) { }

  ngOnInit() {
    this._tablesService.getTables()
      .subscribe(data => {
        this.tables = data;
      });
  }

  onSubmit() {
    this.newTable.CreteDate = new Date();

    this._tablesService.createtable(this.newTable)
      .subscribe(data => {
        console.log(data);
        this.tables.push(this.newTable);
        this.newTable = {};
      });
  }

  addTable() {
    this._showNewTable = !this._showNewTable;
  }
}
