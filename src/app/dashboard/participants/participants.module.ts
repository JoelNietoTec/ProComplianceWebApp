import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ParticipantsRoutingModule } from './participants-router.module';

import { ParticipantsComponent } from './participants.component';
import { ParticipantsFormComponent } from './participants-form/participants-form.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';
import { ParticipantsComplianceComponent } from './participants-compliance/participants-compliance.component';
import { ParticipantsMatrixFormComponent } from './participants-matrix-form/participants-matrix-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ParticipantsRoutingModule
  ],
  declarations: [
    ParticipantsComponent,
    ParticipantsFormComponent,
    ParticipantsListComponent,
    ParticipantDetailsComponent,
    ParticipantsComplianceComponent,
    ParticipantsMatrixFormComponent
  ]
})
export class ParticipantsModule { }
