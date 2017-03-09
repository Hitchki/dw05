import {CompVM} from '../content/content.interfaces'

export interface ComponentStates {
  userId: number;
  navCompVM: CompVM;
  mainCompVM: CompVM;
}

export interface UiState {
    userId: number;
    pathData: string;
}


export const INITIAL_UI_STATE: UiState = {
  userId: undefined,
  pathData: undefined
};
