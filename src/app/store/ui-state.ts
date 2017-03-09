import { ContentVM } from '../cpf/content/content.interfaces';

export interface ComponentStates {
  userId: number;
  navCompVM: ContentVM;
  mainCompVM: ContentVM;
}

export interface UiState {
    userId: number;
    pathData: string;
}


export const INITIAL_UI_STATE: UiState = {
  userId: undefined,
  pathData: undefined
};
