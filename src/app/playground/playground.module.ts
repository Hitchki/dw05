import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireComponent } from './angular-fire/angular-fire.component';
import { PlaygroundComponent} from './playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularFireListComponent } from './angular-fire-list/angular-fire-list.component';
import { AngularFireObjectComponent } from './angular-fire-object/angular-fire-object.component';
import { CssTestComponent } from './css-test/css-test.component';
import { NgIfMediaQuery } from '../media-query/if-media-query.directive'

@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    PlaygroundRoutingModule
  ],
  declarations: [
    PlaygroundComponent,
    AngularFireComponent,
    AngularFireListComponent,
    AngularFireObjectComponent,
    CssTestComponent,
    NgIfMediaQuery
  ]
})
export class PlaygroundModule { }
