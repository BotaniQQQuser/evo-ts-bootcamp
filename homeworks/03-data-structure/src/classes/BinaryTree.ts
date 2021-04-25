import { IBinaryTree, ITreeNode, TraverseType } from '../types/Tree';

export class BinaryTree<T> implements IBinaryTree<T> {
  protected tree: ITreeNode<T>;

  constructor(node: ITreeNode<T>) {
    this.tree = node;
  }

  public setTree(tree: ITreeNode<T>) {
    this.tree = tree;
  }

  public getTree(): ITreeNode<T> {
    return this.tree;
  }

  private inOrderTraverse(tree: ITreeNode<T>, values: T[]) {
    if (tree.left) {
      this.inOrderTraverse(tree.left, values);
    }
    values.push(tree.value);
    if (tree.right) {
      this.inOrderTraverse(tree.right, values);
    }
  }

  private preOrderTraverse(tree: ITreeNode<T>, values: T[]) {
    values.push(tree.value);
    if (tree.left) {
      this.preOrderTraverse(tree.left, values);
    }
    if (tree.right) {
      this.preOrderTraverse(tree.right, values);
    }
  }

  private postOrderTraverse(tree: ITreeNode<T>, values: T[]) {
    if (tree.left) {
      this.postOrderTraverse(tree.left, values);
    }
    if (tree.right) {
      this.postOrderTraverse(tree.right, values);
    }
    values.push(tree.value);
  }

  private breathTraverse(tree: ITreeNode<T>, values: T[]) {
    const queue: ITreeNode<T>[] = [];
    queue.push(tree);
    while (queue.length) {
      const currentNode = queue.shift() as ITreeNode<T>;
      values.push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
  }

  public traverse(traverseType: TraverseType) {
    const values: T[] = [];
    switch (traverseType) {
      case TraverseType.InOrder:
        this.inOrderTraverse(this.tree, values);
        return values;
      case TraverseType.PreOrder:
        this.preOrderTraverse(this.tree, values);
        return values;
      case TraverseType.PostOrder:
        this.postOrderTraverse(this.tree, values);
        return values;
      case TraverseType.Breath:
        this.breathTraverse(this.tree, values);
        return values;
      default:
        return values;
    }
  }
}
