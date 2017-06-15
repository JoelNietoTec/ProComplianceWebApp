import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ParamTablesService } from '../../shared/services/param-tables.service';
import { ParamMaster, ParamValue } from '../../shared/models/params.models';

@Component({
  moduleId: module.id,
  selector: 'app-param-table',
  templateUrl: 'param-table.component.html',
  styleUrls: ['./param-table.component.css']
})

export class ParamTableComponent implements OnInit {

  _table: ParamMaster;
  _newValue: ParamValue;

  constructor(
    private _route: ActivatedRoute,
    private _tableService: ParamTablesService
  ) { }

  ngOnInit() { }
}
