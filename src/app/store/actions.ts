import { Action } from '@ngrx/store';
import { ContentStates } from '../cpf/content/content.interfaces';

export const USER_CHANGED_ACTION = 'USER_CHANGED_ACTION';
export const LOAD_USER_CONTENT_ACTION = 'LOAD_USER_CONTENT_ACTION';
export const USER_CONTENT_LOADED_ACTION = 'USER_CONTENT_LOADED_ACTION';
// export const PATH_STRING_CHANGED_ACTION = 'PATH_STRING_CHANGED_ACTION';
// export const CONTENT_STATE_CHANGED_ACTION = 'CONTENT_STATE_CHANGED_ACTION';

export class UserChangedAction implements  Action {
  readonly type = USER_CHANGED_ACTION;
  constructor(public payload?: any) { }
}

export class LoadUserContentAction implements  Action {
  readonly type = LOAD_USER_CONTENT_ACTION;
  constructor(public payload?: any) { }
}

export class UserContentLoadedAction implements  Action {
  readonly type = USER_CONTENT_LOADED_ACTION;
  constructor(public payload?: any) { }
}

// export class PathStringChangedAction implements  Action {
//   readonly type = PATH_STRING_CHANGED_ACTION;
//   constructor(public payload?: any) { }
// }
//
// export class ContentStatesChangedAction implements  Action {
//   readonly type = CONTENT_STATE_CHANGED_ACTION;
//   constructor(public payload?: ContentStates) { }
// }
//
// export const TEST_EFFECTS_ACTION = 'TEST_EFFECTS_ACTION';
// export class TestEffectsAction implements  Action {
//   readonly type = TEST_EFFECTS_ACTION;
//   constructor(public payload?: any) { }
// }
//
export const TEST_ACTION = 'TEST_ACTION';
export class TestAction implements  Action {
  readonly type = TEST_ACTION;
  constructor(public payload?: any) { }
}


//
// export interface SendNewMessageActionPayload {
//     text:string;
//     threadId: number;
//     participantId: number;
// }
//
//
// export class SendNewMessageAction implements Action {
//     readonly type = SEND_NEW_MESSAGE_ACTION;
//
//     constructor(public payload?: SendNewMessageActionPayload) {
//
//     }
// }
//
//
// export interface NewMessagesReceivedActionPayload {
//     unreadMessages: Message[];
//     currentThreadId: number;
//     currentUserId:number;
// }
//
// export class NewMessagesReceivedAction implements Action {
//     readonly type = NEW_MESSAGES_RECEIVED_ACTION;
//
//     constructor(public payload?: NewMessagesReceivedActionPayload) {
//
//     }
// }







