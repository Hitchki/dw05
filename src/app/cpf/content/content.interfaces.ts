export interface PathNode {
  fragment?: string;
  type: string;  // is the same as the partialFragment
  dwNodes: any[];
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
