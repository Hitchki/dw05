import {USER_CONTENT_LOADED_ACTION, UserContentLoadedAction} from '../actions'
// import {ApplicationState} from '../application-state'
import {StoreData} from '../store-data';

export function storeData(state, action): StoreData {
  switch (action.type) {
    case USER_CONTENT_LOADED_ACTION:
      return handleLoadUserContentAction(state, action);

    default:
      return state;
  }
}


function handleLoadUserContentAction(
  state: StoreData,
  action: UserContentLoadedAction): StoreData {

  debugger;

  const contentData = action.payload;
  return {content: contentData};
}
