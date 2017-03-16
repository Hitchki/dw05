import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaygroundComponent } from './playground.component';
import { AngularFireComponent } from './angular-fire/angular-fire.component';
import { AngularFireListComponent } from './angular-fire-list/angular-fire-list.component'
import { AngularFireObjectComponent } from './angular-fire-object/angular-fire-object.component'


const playgroundRoutes: Routes =
[
  {
    path: 'playground',
    component: PlaygroundComponent,
    children:
    [
      {
        path: 'angular-fire',
        component: AngularFireComponent
      }, {
        path: 'angular-fire-list',
        component: AngularFireListComponent
      }, {
        path: 'angular-fire-object',
        component: AngularFireObjectComponent
      },
      /*      {
        path: 'play2',
        component: Play2Component
      },
      {
        path: 'play3',
        component: Play3Component
      },
      {
        path: 'sim-playground',
        component: SimPlaygroundComponent
      }*/

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(playgroundRoutes)],
  exports: [RouterModule],
  providers: []
})
export class PlaygroundRoutingModule { }

