import { Component, OnInit, Input } from '@angular/core';
import { ParamCategory, ParamTable, Param } from '../../../shared/models/params.models';

import { ParamTablesService } from '../../../shared/services/param-tables.service';
import { ParamsService } from '../../../shared/services/param.service';


@Component({
  moduleId: module.id,
  selector: 'app-param-category',
  templateUrl: './param-category.component.html',
  styleUrls: ['./param-category.component.css']
})

export class ParamCategoryComponent implements OnInit {
  @Input() category: ParamCategory;
  @Input() tables: ParamTable[];

  _param: Param;

  constructor(
    private _paramService: ParamsService
  ) {
    this._param = {};
  }

  ngOnInit() {
  }

  addParam() {
    this._param.ParamCategoryID = this.category.ID;
    this._param.ParamTableID = this._param.ParamTable.ID;
    this._paramService.addParams(this._param)
      .subscribe(data => {
        this.category.Params.push(this._param);
        this._param = {};
      });
  }
}
