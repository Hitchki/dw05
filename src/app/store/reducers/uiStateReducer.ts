import { UiState, INITIAL_UI_STATE } from '../ui-state';
import { USER_CHANGED_ACTION, UserChangedAction } from '../actions';
// import {USER_CONTENT_LOADED_ACTION, UserContentLoadedAction} from '../actions';
// import {ApplicationState} from '../application-state'

export function uiState(state: UiState = INITIAL_UI_STATE, action): UiState {

  switch (action.type) {
    // case USER_CONTENT_LOADED_ACTION:
    //   return handleLoadUserContentAction(state, action);

    case USER_CHANGED_ACTION:
      return handleUserChangedAction(state, action);

    default:
      return state;
  }
}

function handleUserChangedAction(
  state: UiState,
  action: UserChangedAction): UiState {
  // const fragment = action.payload;
  const newUiState = Object.assign({}, state);

  // newUiState.cpfAction = action.payload;
  newUiState.urlPath = action.payload.urlPath;
  newUiState.userId = action.payload.userId;
  return newUiState;
}
