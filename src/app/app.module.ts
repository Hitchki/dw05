import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { firebaseConfig } from '../environments/firebase.config';
import { PlaygroundModule } from './playground/playground.module';
import { CpfModule } from './cpf/cpf.module';
import { EffectsModule } from '@ngrx/effects';
import { LoadContentEffectService } from './store/effects/load-content-effect.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

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
    CpfModule,
    PlaygroundModule,

    // ES6 abbreviated syntax
    // StoreModule.provideStore(rootReducer, INITIAL_APPLICATION_STATE),
    // StoreModule.provideStore(combineReducers({uiState, storeData}), INITIAL_APPLICATION_STATE),

    // EffectsModule.run(LoadContentEffectService),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
