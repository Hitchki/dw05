import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content/content.component';
import { CpfRoutingModule } from './cpf-routing.module';
import { NavComponent } from './content/nav/nav.component';
import { MainComponent } from './content/main/main.component';
import { NavMoreComponent } from './content/nav-more/nav-more.component';
import { CpfComponent } from './cpf.component';
import { ContentService } from './content/content.service';
import { PathnodesService } from './content/pathnodes.service'

@NgModule({
  imports: [
    CommonModule,
    CpfRoutingModule
  ],
  declarations: [CpfComponent, ContentComponent, NavComponent, MainComponent, NavMoreComponent],
  providers: [ContentService, PathnodesService]
})
export class CpfModule { }
