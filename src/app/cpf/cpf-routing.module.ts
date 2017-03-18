import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { CpfComponent } from './cpf.component';

const cpfRoutes: Routes =
[
  {
    path: 'cpf-old',
    component: ContentComponent,
    data: { action: 'cpf' }
  }, {
    path: 'cpf',
    component: CpfComponent,
    data: { action: 'cpf' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(cpfRoutes)],
  exports: [RouterModule],
  providers: []
})
export class CpfRoutingModule { }

