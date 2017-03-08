import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content/content.component';
import { CpfRoutingModule } from './cpf-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CpfRoutingModule
  ],
  declarations: [ContentComponent]
})
export class CpfModule { }
