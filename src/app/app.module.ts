import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
// import { Observable } from 'rxjs/Observable';

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
import { StoreModule, Action } from '@ngrx/store';
import { INITIAL_APPLICATION_STATE, ApplicationState } from './store/application-state';
import { TEST_ACTION, PATH_STRING_CHANGED_ACTION } from './store/actions';

export function storeReducer(state: ApplicationState, action: Action): ApplicationState {

  switch (action.type) {
    case TEST_ACTION:
      return handleTestAction(state, action);

    case PATH_STRING_CHANGED_ACTION:
      return handlePathStringChangedAction(state, action);

    default: return state;
  }
}

function handleTestAction(state: ApplicationState, action: Action): ApplicationState {
  const newState: ApplicationState = Object.assign({}, state);
  newState.storeData = { content: action.payload };
  return newState;
}

function handlePathStringChangedAction1(state: ApplicationState, action: Action): ApplicationState {
  const newState: ApplicationState = Object.assign({}, state);
  newState.uiState.pathNodesString = action.payload;
  return newState;
}

function handlePathStringChangedAction(state: ApplicationState, action: Action): ApplicationState {
  const newState: ApplicationState = Object.assign({}, state);

  const newUiState = Object.assign({}, state.uiState);
  newUiState.pathNodesString = action.payload;

  newState.uiState = newUiState;
  return newState;
}

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

    StoreModule.provideStore(storeReducer, INITIAL_APPLICATION_STATE),

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
