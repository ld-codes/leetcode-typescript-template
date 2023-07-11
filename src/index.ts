import {MaxPriorityQueue} from '@datastructures-js/priority-queue';

/**
 * Before submitting to Leetcode, remove import statement in the above and export keyword from
 * the function body like the following
 *
 * function lastStoneWeight(stones: number[]): number {
 *   // code
 * }
 */
export function lastStoneWeight(stones: number[]): number {
  const queue = new MaxPriorityQueue({priority: elem => elem});
  stones.forEach(stone => queue.enqueue(stone));
  while (queue.size() >= 2) {
    const first = queue.dequeue();
    const second = queue.dequeue();
    const next = first.element - second.element;
    if (next > 0) {
      queue.enqueue(next);
    }
  }
  if (queue.size() === 0) {
    return 0;
  }
  return queue.dequeue().element;
}
