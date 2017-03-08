import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';

const cpfRoutes: Routes =
[
  {
    path: 'cpf',
    component: ContentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(cpfRoutes)],
  exports: [RouterModule],
  providers: []
})
export class CpfRoutingModule { }

