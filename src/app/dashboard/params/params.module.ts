import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../shared/shared.module';
import { LoadingModalComponent } from '../../shared/components/loading-modal/loading-modal.component';

import { ParamsRoutingModule } from './params-router.module';

import { ParamsComponent } from './params.component';
import { ParamMatricesComponent } from './param-matrices/param-matrices.component';
import { ParamMatrixComponent } from './param-matrix/param-matrix.component';
import { ParamTablesComponent } from './param-tables/param-tables.component';
import { ParamTableComponent } from './param-table/param-table.component';
import { ParamCategoryComponent } from './param-category/param-category.component';
import { ParamCategoriesComponent } from './param-categories/param-categories.component';
import { ParamItemsComponent } from './param-items/param-items.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ParamsRoutingModule,
    SharedModule
  ],
  providers: [
  ],
  declarations: [
    ParamsComponent,
    ParamMatricesComponent,
    ParamMatrixComponent,
    ParamTablesComponent,
    ParamTableComponent,
    ParamCategoryComponent,
    ParamCategoriesComponent,
    ParamItemsComponent
  ]
})
export class ParamsModule { }