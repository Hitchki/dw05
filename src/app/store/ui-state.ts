import { ContentVM, PathNodes } from '../cpf/content/content.interfaces';

export interface ComponentStates {
  userId: number;
  navCompVM: ContentVM;
  mainCompVM: ContentVM;
}

export interface UiState {
  userId: string;
  pathNodesString: string;
  pathNodes: PathNodes;
}


export const INITIAL_UI_STATE: UiState = {
  userId: undefined,
  pathNodesString: undefined,
  pathNodes: undefined,
};
