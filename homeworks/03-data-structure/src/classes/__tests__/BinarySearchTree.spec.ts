import { BinarySearchTree } from '../BinarySearchTree';
import { TEST_TREE_NODE } from '../__constants__/testData';

const TEST_BINARY_TREE = new BinarySearchTree(TEST_TREE_NODE);
const GET_COLUMN_RESULTS: [number[], number][] = [
  [[4, 6, 9], -1],
  [[7, 8, 10], 0],
  [[11, 12, 13], 1],
  [[20], 3],
];

describe('BinarySearchTree', () => {
  it('should create new BinarySearchTree instance', () => {
    expect(TEST_BINARY_TREE.getTree()).toEqual(TEST_TREE_NODE);
  });

  it('should find element in left sub-tree and return true', () => {
    expect(TEST_BINARY_TREE.has(1)).toBe(true);
  });

  it('should find in right sub-tree and return true', () => {
    expect(TEST_BINARY_TREE.has(20)).toBe(true);
  });

  it('should return false for non-existent element', () => {
    expect(TEST_BINARY_TREE.has(60)).toBe(false);
  });

  it.each(GET_COLUMN_RESULTS)('should return %p for "%s" index', (values, column) => {
    expect(TEST_BINARY_TREE.getColumn(column)).toEqual(values);
  });

  it('should return empty array if there is no values in such column', () => {
    expect(TEST_BINARY_TREE.getColumn(20)).toEqual([]);
  });
});
