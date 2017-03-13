import { ContentVM, PathNodes, ContentStates } from '../cpf/content/content.interfaces';

export interface ComponentStates {
  userId: number;
  navCompVM: ContentVM;
  mainCompVM: ContentVM;
}

export interface UiState {
  userId: string;
  pathNodesString: string;
  pathNodes: PathNodes;
  contentStates: ContentStates;
}


export const INITIAL_UI_STATE: UiState = {
  userId: undefined,
  pathNodesString: undefined,
  pathNodes: undefined,
  contentStates: undefined
};
