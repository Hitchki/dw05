// import { ContentVM, PathNodes, ContentStates } from '../cpf/content/content.interfaces';

// export interface ComponentStates {
//   userId: number;
//   navCompVM: ContentVM;
//   mainCompVM: ContentVM;
// }

export interface UiState {
  cpfAction: string;
  urlPath: string;
  userId: string;
  // pathNodesString: string;
  // pathNodes: PathNodes;
  // contentStates: ContentStates;
}


export const INITIAL_UI_STATE: UiState = {
  cpfAction: undefined,
  urlPath: undefined,
  userId: undefined,
  // pathNodesString: undefined,
  // pathNodes: undefined,
  // contentStates: undefined
};
