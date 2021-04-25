import { IBinarySearchTree, ITreeNode } from '../types/Tree';
import { BinaryTree } from './BinaryTree';

export class BinarySearchTree extends BinaryTree<number> implements IBinarySearchTree {
  constructor(tree: ITreeNode<number>) {
    super(tree);
  }

  private hasItem(tree: ITreeNode<number>, value: number): boolean {
    if (tree.value === value) return true;
    if (tree.right && value > tree.value) {
      return this.hasItem(tree.right, value);
    }
    if (tree.left && value < tree.value) {
      return this.hasItem(tree.left, value);
    }

    return false;
  }

  public has(value: number) {
    return this.hasItem(this.tree, value);
  }

  /**
   * inOrder traverse to get items, which are sorted ascending
   */
  private getColumnFromSubTree(tree: ITreeNode<number>, targetColumn: number, currentColumn: number, values: number[]) {
    if (tree.left) {
      this.getColumnFromSubTree(tree.left, targetColumn, currentColumn - 1, values);
    }
    if (currentColumn === targetColumn) {
      values.push(tree.value);
    }
    if (tree.right) {
      this.getColumnFromSubTree(tree.right, targetColumn, currentColumn + 1, values);
    }
  }

  public getColumn(column: number): number[] {
    const values: number[] = [];
    this.getColumnFromSubTree(this.tree, column, 0, values);
    return values;
  }
}
