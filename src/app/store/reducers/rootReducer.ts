import {compose} from '@ngrx/core';
import {combineReducers} from '@ngrx/store';
import {uiState} from './uiStateReducer';
import {storeData} from './storeDataReducer';

export function rootReducer() {
  return compose(combineReducers)({
    uiState: uiState,
    storeData: storeData
  });
}
