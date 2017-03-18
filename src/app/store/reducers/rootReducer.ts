import {compose} from '@ngrx/core';
import { combineReducers, Action } from '@ngrx/store';
import {uiState} from './uiStateReducer';
import {storeData} from './storeDataReducer';
import { ApplicationState, INITIAL_APPLICATION_STATE } from '../application-state'

export function rootReducer(
    state: ApplicationState = INITIAL_APPLICATION_STATE,
    action: Action): ApplicationState  {
  return {
    uiState: uiState(state.uiState, action),
    storeData: storeData(state.storeData, action)
  };
}


/*
export function rootReducer() {
  return compose(combineReducers)({
    uiState: uiState,
    storeData: storeData
  });
}*/
