import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireComponent } from './angular-fire/angular-fire.component';
import { PlaygroundComponent} from './playground.component';
import { PlaygroundRoutingModule } from './playground-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AngularFireListComponent } from './angular-fire-list/angular-fire-list.component';
import { AngularFireObjectComponent } from './angular-fire-object/angular-fire-object.component';
import { CssTestComponent } from './css-test/css-test.component';
import { NgIfMediaQuery } from '../media-query/if-media-query.directive';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,

    SharedModule,
    PlaygroundRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    PlaygroundComponent,
    AngularFireComponent,
    AngularFireListComponent,
    AngularFireObjectComponent,
    CssTestComponent,
    NgIfMediaQuery,
    TemplateFormsComponent,
    ReactiveFormsComponent,
  ]
})
export class PlaygroundModule { }
