import { UiState, INITIAL_UI_STATE } from '../ui-state';
import {USER_CONTENT_LOADED_ACTION, UserContentLoadedAction} from '../actions'
// import {ApplicationState} from '../application-state'

export function uiState(state: UiState = INITIAL_UI_STATE, action): UiState {

  switch (action.type) {
    case USER_CONTENT_LOADED_ACTION:
      return handleLoadUserContentAction(state, action);

    default:
      return state;
  }
}

function handleLoadUserContentAction(
  state: UiState,
  action: UserContentLoadedAction): UiState {

  debugger;

  const projectData = action.payload;
  const newUiState = Object.assign({}, state);

  newUiState.userId = '42';

  return newUiState;
  // return { content: projectData };
}
