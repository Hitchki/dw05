import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content/content.component';
import { CpfRoutingModule } from './cpf-routing.module';
import { NavComponent } from './content/nav/nav.component';
import { MainComponent } from './content/main/main.component';
import { NavMoreComponent } from './content/nav-more/nav-more.component';

@NgModule({
  imports: [
    CommonModule,
    CpfRoutingModule
  ],
  declarations: [ContentComponent, NavComponent, MainComponent, NavMoreComponent]
})
export class CpfModule { }
