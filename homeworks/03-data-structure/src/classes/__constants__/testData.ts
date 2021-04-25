import { ITreeNode } from '../../types/Tree';

/**
 *              (8)
 *         /          \
 *       (6)           (12)
 *      /  \         /     \
 *    (3)  (7)    (10)      (14)
 *    / \         /  \      /   \
 * (1)  (4)     (9) (11)  (13)  (20)
 */
export const TEST_TREE_NODE: ITreeNode<number> = {
  value: 8,
  left: {
    value: 6,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      }
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
  right: {
    value: 12,
    left: {
      value: 10,
      left: {
        value: 9,
        left: null,
        right: null,
      },
      right: {
        value: 11,
        left: null,
        right: null,
      }
    },
    right: {
      value: 14,
      left: {
        value: 13,
        left: null,
        right: null,
      },
      right: {
        value: 20,
        left: null,
        right: null,
      }
    },
  },
};
