import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  LOAD_USER_CONTENT_ACTION, LoadUserContentAction, UserChangedAction, TestAction, UserContentLoadedAction
} from '../actions';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs';
import { ContentService } from '../../cpf/content/content.service';


@Injectable()
export class LoadContentEffectService {

  constructor(private actions$: Actions, private contentService: ContentService) { }

  /* tslint:disable:member-ordering */
  @Effect() userContent$: Observable<Action> = this.actions$
  // @Effect({dispatch: false}) userContent$: Observable<Action> = this.actions$
    .ofType(LOAD_USER_CONTENT_ACTION)
    .debug('LOAD_USER_CONTENT_ACTION received!')
    .switchMap(action => this.contentService.getUserContent('prototext') )
    // .switchMap(action => this.contentService.getPathNodes('prototext') )
    .do((content) => console.log('content', content))
    .debug('getUserContent - data received!!')
    // .map((content) => new TestAction(content) );
    .map((content) => new UserContentLoadedAction(content) );
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


/*
@Injectable()
export class ServerNotificationsEffectService {


  constructor(private threadsService: ThreadsService, private store: Store<ApplicationState>) {

  }


  @Effect() newMessages$ = Observable.interval(3000)
    .withLatestFrom(this.store.select("uiState"))
    .map(([any,uiState]) => uiState)
    .filter(uiState => uiState.userId)
    .switchMap(uiState => this.threadsService.loadNewMessagesForUser(uiState.userId))
    .debug("new messages received from server")
    .withLatestFrom(this.store.select("uiState"))
    .map(([unreadMessages, uiState]) =>  new NewMessagesReceivedAction({
      unreadMessages,
      currentThreadId: uiState.currentThreadId,
      currentUserId: uiState.userId
    }))*/


/*
constructor(private actions$: Actions, private threadsService: ThreadsService) {

}


@Effect({dispatch:false}) markMessagesAsRead$ =
  this.actions$.ofType(THREAD_SELECTED_ACTION)
    .switchMap((action: ThreadSelectedAction) =>
      this.threadsService.markMessagesAsRead(
        action.payload.currentUserId,
        action.payload.selectedThreadId));


}*/

/*
constructor(private actions$: Actions, private threadsService: ThreadsService) {

}

@Effect() newMessages$ : Observable<any> = this.actions$
  .ofType(SEND_NEW_MESSAGE_ACTION)
  .debug("sending new message to the server")
  .switchMap(action => this.threadsService.saveNewMessage(action.payload))
  .catch(() => Observable.of(new ErrorOccurredAction("Error Ocurred while saving message")) );*/
