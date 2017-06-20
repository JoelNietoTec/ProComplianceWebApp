import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GendersService } from './services/genders.service';
import { IndividualService } from './services/individuals.service';
import { ParamMatricesService } from './services/param-matrices.service';
import { MatrixTypesService } from './services/matrix-types.service';
import { ParamCategoriesService } from './services/param-categories.service';
import { ConnectionService } from './services/connection.service';
import { ParamTablesService } from './services/param-tables.service';
import { LoadingModalComponent } from './components/loading-modal/loading-modal.component';
import { BooleanPipe } from './pipes/boolean.pipe';
import { AddButtonComponent } from './components/add-button/add-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoadingModalComponent
  ],
  providers: [
    GendersService,
    IndividualService,
    ParamMatricesService,
    MatrixTypesService,
    ParamCategoriesService,
    ParamTablesService,
    ConnectionService
  ],
  declarations: [LoadingModalComponent, BooleanPipe, AddButtonComponent]
})
export class SharedModule { }
