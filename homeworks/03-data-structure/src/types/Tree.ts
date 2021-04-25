export interface ITreeNode<T> {
  value: T;
  left: ITreeNode<T> | null;
  right: ITreeNode<T> | null;
}

export enum TraverseType {
  InOrder = 'InOrder',
  PreOrder = 'PreOrder',
  PostOrder = 'PostOrder',
  Breath = 'Breath',
}

export interface IBinaryTree<T> {
  setTree: (tree: ITreeNode<T>) => void;
  traverse: (traverseType: TraverseType) => T[];
  // getColumn
}

export interface IBinarySearchTree extends IBinaryTree<number> {
  has: (value: number) => boolean;
}
