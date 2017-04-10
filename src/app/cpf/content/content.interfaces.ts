// export interface BasePathNode {
//   type: string;  // is the same as the partialFragment
//   cpfNodes: any[];
//   selectedIndex: number;
// }

// export type BasePathNodes = BasePathNode[];

export interface PathNode {
  cpfNodes: any[];
  firePath?: string;
  selectedIndex: number;
  type: string;  // is the same as the partialFragment
  urlPath?: string;
}

export type PathNodes = PathNode[];

export type UiChange = string;

export interface UiChangeEvent {
  urlPath: string;
  firePath: string;
}

export interface ContentData extends PathNode {
  selectedChildIndex?: number;
  contentPath?: string;
}

export interface AllContentData {
  navContent: ContentData;
  navMoreContent: ContentData;
  mainContent: ContentData;
  // async?: any;
}

// export interface PathData {
//   pathNodes?: PathNodes;
//   selectedPathNode?: PathNode;
//   selectedPathNodeIndex: number;
// }

// export interface ContentVM {
//   pathData: PathData;
//   action?: string;
//   isEditMode?: boolean;
// }
//
// export interface ContentStates {
//   navContent: ContentVM;
//   navMoreContent: ContentVM;
//   mainContent: ContentVM;
// }

// export interface UiChange {
//   pathString: string;
// }
