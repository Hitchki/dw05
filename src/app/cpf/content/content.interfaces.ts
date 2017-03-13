export interface PathNode {
  pathNodesString?: string;
  type: string;  // is the same as the partialFragment
  cpfNodes: any[];
  selectedIndex: number;
}

export type PathNodes = PathNode[];

export interface PathData {
  pathNodes?: PathNodes;
  selectedPathNode?: PathNode;
  selectedPathNodeIndex: number;
}

export interface ContentVM {
  pathData: PathData;
  action?: string;
  isEditMode?: boolean;
}

export interface ContentStates {
  navContent: ContentVM;
  navMoreContent: ContentVM;
  mainContent: ContentVM;
}

