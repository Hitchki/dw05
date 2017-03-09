import { Action } from '@ngrx/store';

export const LOAD_USER_CONTENT_ACTION = 'LOAD_USER_CONTENT_ACTION';
export const USER_CONTENT_LOADED_ACTION = 'USER_CONTENT_LOADED_ACTION';


export class UserContentLoadedAction implements  Action {

  readonly type = USER_CONTENT_LOADED_ACTION;

  constructor(public payload?: any) {

  }
}

export class LoadUserContentAction implements  Action {

  readonly type = LOAD_USER_CONTENT_ACTION;

  constructor(public payload?: any) {

  }
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







