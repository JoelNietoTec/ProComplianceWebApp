import { Component, OnInit, Input } from '@angular/core';
import { ParamCategory } from '../../shared/models/params.models';


@Component({
  moduleId: module.id,
  selector: 'app-param-category',
  templateUrl: './param-category.component.html',
  styleUrls: ['./param-category.component.css']
})

export class ParamCategoryComponent implements OnInit {
  @Input() category: ParamCategory;

  constructor() { }

  ngOnInit() { }
}
