import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Model Services
import { GendersService } from './services/genders.service';
import { ParticipantsService } from './services/participants.service';
import { ParamMatricesService } from './services/param-matrices.service';
import { MatrixTypesService } from './services/matrix-types.service';
import { ParamCategoriesService } from './services/param-categories.service';
import { ConnectionService } from './services/connection.service';
import { ParamTablesService } from './services/param-tables.service';
import { ParamsService } from './services/param.service';

// Services

import { UtilitiesService } from './services/utilities.service';

// Components
import { LoadingModalComponent } from './components/loading-modal/loading-modal.component';
import { AddButtonComponent } from './components/add-button/add-button.component';
import { CardComponent } from './components/card/card.component';
import { MatrixControlComponent } from './components/matrix-control/matrix-control.component'

// Pipes
import { BooleanPipe } from './pipes/boolean.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoadingModalComponent, SortPipe
  ],
  providers: [
    GendersService,
    ParticipantsService,
    ParamMatricesService,
    MatrixTypesService,
    ParamCategoriesService,
    ParamTablesService,
    ParamsService,
    ConnectionService,
    UtilitiesService
  ],
  declarations: [
    LoadingModalComponent,
    BooleanPipe,
    AddButtonComponent,
    CardComponent,
    SortPipe,
    MatrixControlComponent]
})
export class SharedModule { }
