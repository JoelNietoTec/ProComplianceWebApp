import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantsComponent } from './participants.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import { ParticipantsFormComponent } from './participants-form/participants-form.component';
import { ParticipantDetailsComponent } from './participant-details/participant-details.component';

const routes: Routes = [
  {
    path: 'Participants',
    component: ParticipantsComponent,
    children: [
      {
        path: '', component: ParticipantsListComponent
      },
      {
        path: 'New', component: ParticipantsFormComponent
      },
      {
        path: ':id', component: ParticipantDetailsComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantsRoutingModule { }

export const routedComponents = [
  ParticipantsComponent,
  ParticipantsListComponent,
  ParticipantsFormComponent,
  ParticipantDetailsComponent
];
