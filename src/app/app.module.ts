import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core/core.module';
import { firebaseConfig } from '../environments/firebase.config';
import {PlaygroundModule} from './playground/playground.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    CoreModule,

    PlaygroundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
