import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from './content/content.component';
import { CpfRoutingModule } from './cpf-routing.module';
import { NavComponent } from './content/nav/nav.component';
import { MainComponent } from './content/main/main.component';
import { NavMoreComponent } from './content/nav-more/nav-more.component';
import { CpfComponent } from './cpf.component';
import { ContentService } from './content/content.service';
import { PathnodesService } from './content/services/pathnodes/pathnodes.service';
import { NormtextComponent } from './content/normtext/normtext/normtext.component';
import { SearchtreeComponent } from './content/searchtree/searchtree/searchtree.component'
import { AllContentService } from './content/services/all-content/all-content.service'
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CpfRoutingModule
  ],
  declarations: [CpfComponent, ContentComponent, NavComponent, MainComponent, NavMoreComponent, NormtextComponent, SearchtreeComponent],
  providers: [ContentService, PathnodesService, AllContentService]
})
export class CpfModule { }
