import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParamsComponent } from './params.component';
import { ParamMatricesComponent } from './param-matrices/param-matrices.component';
import { ParamMatrixComponent } from './param-matrix/param-matrix.component';
import { ParamTablesComponent } from './param-tables/param-tables.component';


const routes: Routes = [
  {
    path: 'Params', component: ParamsComponent,
    children:
    [
      {
        path: 'Matrices', component: ParamMatricesComponent
      },
      {
        path: 'Tables', component: ParamTablesComponent
      },
      {
        path: 'Matrix/:id', component: ParamMatrixComponent
      },
      {
        path: '**', pathMatch: 'full', redirectTo: 'Matrices'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParamsRoutingModule { }

export const routedComponents = [ParamsComponent, ParamMatrixComponent, ParamMatricesComponent, ParamTablesComponent];
