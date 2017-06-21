import { Component, OnInit, Input } from '@angular/core';
import { ParamCategory, ParamTable } from '../../shared/models/params.models';

import { ParamTablesService } from '../../shared/services/param-tables.service';


@Component({
  moduleId: module.id,
  selector: 'app-param-category',
  templateUrl: './param-category.component.html',
  styleUrls: ['./param-category.component.css']
})

export class ParamCategoryComponent implements OnInit {
  @Input() category: ParamCategory;
  @Input() tables: ParamTable[];

  constructor() { }

  ngOnInit() {
    console.log(this.category);
   }
}
