import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LOAD_USER_CONTENT_ACTION, UserContentLoadedAction, TEST_EFFECTS_ACTION, TestEffectsAction } from '../actions';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';

import { ContentService } from '../../cpf/content/content.service';

@Injectable()
export class LoadContentEffectService {

  constructor(private actions$: Actions) { }

  /* tslint:disable:member-ordering */
  @Effect() userContent$: Observable<Action> = this.actions$
    .ofType(TEST_EFFECTS_ACTION)
  // debugger;
    .debug('action received!!!!!!!')
    // .switchMap(action => this.contentService.getPathNodes('test2') )
  //   .debug('data received via the HTTP request xxxxxxx')
    .map(() => new TestEffectsAction() );
  //
}


// import { Injectable } from '@angular/core';
// import {ThreadsService} from "../../services/threads.service";
// import {Actions, Effect} from "@ngrx/effects";
// import {LOAD_USER_THREADS_ACTION, UserThreadsLoadedAction, SELECT_USER_ACTION, LoadUserThreadsAction} from "../actions";
// import {Observable} from "rxjs";
// import {Action} from "@ngrx/store";




// @Injectable()
// export class LoadThreadsEffectService {
//
//   constructor(private actions$: Actions, private threadsService: ThreadsService) {
//
//   }
//
//   @Effect() userThreads$: Observable<Action> = this.actions$
//     .ofType(LOAD_USER_THREADS_ACTION)
//     .debug("action received")
//     .switchMap(action => this.threadsService.loadUserThreads(action.payload))
//     .debug("data received via the HTTP request")
//     .map(allUserData => new UserThreadsLoadedAction(allUserData) );
//
//
//   @Effect() newUserSelected$ : Observable<Action> = this.actions$
//     .ofType(SELECT_USER_ACTION)
//     .debug("New user selected")
//     .map(action =>  new LoadUserThreadsAction(action.payload));
//
// }
