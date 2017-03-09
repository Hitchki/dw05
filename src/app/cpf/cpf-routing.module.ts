import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';

const cpfRoutes: Routes =
[
  {
    path: 'cpf',
    component: ContentComponent,
    data: { action: 'cpf' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(cpfRoutes)],
  exports: [RouterModule],
  providers: []
})
export class CpfRoutingModule { }

