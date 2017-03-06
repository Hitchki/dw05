import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlaygroundComponent} from './playground.component'
import { PlaygroundRoutingModule } from './playground-routing.module';
import { AngularFireComponent } from './angular-fire/angular-fire.component'

@NgModule({
  imports: [
    CommonModule,

    PlaygroundRoutingModule
  ],
  declarations: [
    PlaygroundComponent,
    AngularFireComponent
  ]
})
export class PlaygroundModule { }
