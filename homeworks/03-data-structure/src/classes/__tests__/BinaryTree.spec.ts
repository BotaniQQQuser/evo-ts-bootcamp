import { BinaryTree } from '../BinaryTree';
import { TraverseType } from '../../types/Tree';
import { TEST_TREE_NODE } from '../__constants__/testData';

const TEST_TREE: BinaryTree<number> = new BinaryTree(TEST_TREE_NODE);
const TREES_AND_TRAVERSE_RESULTS: [TraverseType, BinaryTree<number>, number[]][] = [
  [TraverseType.InOrder, TEST_TREE, [1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 20]],
  [TraverseType.PreOrder, TEST_TREE, [8, 6, 3, 1, 4, 7, 12, 10, 9, 11, 14, 13, 20]],
  [TraverseType.PostOrder, TEST_TREE, [1, 4, 3, 7, 6, 9, 11, 10, 13, 20, 14, 12, 8]],
  [TraverseType.Breath, TEST_TREE, [8, 6, 12, 3, 7, 10, 14, 1, 4, 9, 11, 13, 20]],
];

describe('BinaryTree', () => {
  it('should create new BinaryTree instance', () => {
    const tree = new BinaryTree<number>(TEST_TREE_NODE);
    expect(tree.getTree()).toEqual(TEST_TREE_NODE);
  });

  it('should reset current tree and save new', () => {
    const tree = new BinaryTree<number>({
      value: 1,
      left: null,
      right: null,
    });

    tree.setTree(TEST_TREE_NODE);

    expect(tree.getTree()).toEqual(TEST_TREE_NODE);
  });

  it.each(TREES_AND_TRAVERSE_RESULTS)('should return values in %s order', (traverseType, tree, values) => {
    expect(tree.traverse(traverseType)).toEqual(values);
  });
});
