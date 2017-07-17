import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ParticipantsRoutingModule } from './participants-router.module';

import { ParticipantsComponent } from './participants.component';
import { ParticipantsFormComponent } from './participants-form/participants-form.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';
import { ParticipantComplianceComponent } from './participant-compliance/participant-compliance.component';
import { ParticipantsMatrixFormComponent } from './participants-matrix-form/participants-matrix-form.component';
import { ParticipantComplianceParamComponent } from './participant-compliance-param/participant-compliance-param.component';
import { ParticipantComplianceDetailsComponent } from './participant-compliance-details/participant-compliance-details.component';
import { IndividualFormComponent } from './individual-form/individual-form.component';
import { EntityFormComponent } from './entitiy-form/entity-form.component';
import { EntitiesListComponent } from './entities-list/entities-list.component';

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
    ParticipantComplianceComponent,
    ParticipantsMatrixFormComponent,
    ParticipantComplianceParamComponent,
    ParticipantComplianceDetailsComponent,
    IndividualFormComponent,
    EntityFormComponent,
    EntitiesListComponent
  ]
})
export class ParticipantsModule { }
