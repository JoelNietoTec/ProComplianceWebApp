import { Component, OnInit, Input } from '@angular/core';

import { ParamMatrix } from '../../../shared/models/param-matrices.model';
import { ParamTable } from '../../../shared/models/params.models';
import { ParamTablesService } from '../../../shared/services/param-tables.service';

@Component({
  selector: 'param-items',
  templateUrl: './param-items.component.html'
})

export class ParamItemsComponent implements OnInit {
  @Input() matrix: ParamMatrix;

  _tables: ParamTable[];

  constructor(
    private _tableService: ParamTablesService
  ) { }

  ngOnInit() {
    this._tableService.getTables()
      .subscribe(data => {
        this._tables = data;
      });
   }
}
