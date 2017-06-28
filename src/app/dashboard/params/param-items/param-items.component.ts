import { Component, OnInit, Input } from '@angular/core';

import { ParamMatrix } from '../../../shared/models/param-matrices.model';
import { ParamTable } from '../../../shared/models/params.models';
import { ParamTablesService } from '../../../shared/services/param-tables.service';
import { UtilitiesService } from '../../../shared/services/utilities.service';

@Component({
  selector: 'param-items',
  templateUrl: './param-items.component.html'
})

export class ParamItemsComponent implements OnInit {
  @Input() matrix: ParamMatrix;

  _tables: ParamTable[];

  constructor(
    private _tableService: ParamTablesService,
    private _util: UtilitiesService
  ) { }

  ngOnInit() {
    this._tableService.getTables()
      .subscribe(data => {
        this._tables = this._util.sortBy(data, 'EnglishName');
      });
   }
}
