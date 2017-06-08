import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { GendersService } from './services/genders.service';
import { IndividualService } from './services/individuals.service';
import { ParamMatricesService } from './services/param-matrices.service';
import { MatrixTypesService } from './services/matrix-types.service';
import { ParamCategoriesService } from './services/param-categories.service';
import { ConnectionService } from './services/connection.service';
import { LoadingModalComponent } from './components/loading-modal/loading-modal.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    GendersService,
    IndividualService,
    ParamMatricesService,
    MatrixTypesService,
    ParamCategoriesService,
    ConnectionService
  ],
  declarations: [LoadingModalComponent]
})
export class SharedModule { }
