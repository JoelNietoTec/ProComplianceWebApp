import { Component, OnInit } from '@angular/core';

import { ParamTablesService } from '../../../shared/services/param-tables.service';
import { ParamTable, ParamValue, TableType } from '../../../shared/models/params.models';
import { UtilitiesService } from '../../../shared/services/utilities.service';

@Component({
  selector: 'app-param-tables',
  templateUrl: 'param-tables.component.html',
  styleUrls: ['./param-tables.component.css']
})

export class ParamTablesComponent implements OnInit {

  tables: ParamTable[];
  _tableTypes: TableType[];
  _showNewTable: boolean;
  newTable: ParamTable = {};
  _saving: boolean = false;

  constructor(
    private _tablesService: ParamTablesService,
    private _utilities: UtilitiesService
  ) { }

  ngOnInit() {
    this._tableTypes = [
      {
        ID: 1,
        Name: 'Simple',
        EnglishName: 'Simple'
      },
      {
        ID: 2,
        Name: 'Complejo',
        EnglishName: 'Complex'
      }
    ];

    this._tablesService.getTables()
      .subscribe(data => {
        this.tables = this._utilities.sortBy(data, 'Name');
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
