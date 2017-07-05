import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ParamsComponent } from './dashboard/params/params.component';
import { ParticipantsComponent } from './dashboard/participants/participants.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Params', component: ParamsComponent },
  { path: 'Participants', component: ParticipantsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
  HomeComponent,
  ParamsComponent,
  ParticipantsComponent
];
