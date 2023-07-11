declare module '@datastructures-js/priority-queue' {
  type PriorityQueueElement<T> = {priority: number; element: T};
  class PriorityQueue<T = number> {
    constructor(options?: {priority: (element: T) => number});
    size(): number;
    isEmpty(): boolean;
    front(): PriorityQueueElement<T>;
    back(): PriorityQueueElement<T>;
    enqueue(element: T, priority?: number): void;
    dequeue(): PriorityQueueElement<T>;
    toArray(): Array<PriorityQueueElement<T>>;
    clear(): void;
  }
  export class MaxPriorityQueue<T = number> extends PriorityQueue<T> {}
  export class MinPriorityQueue<T = number> extends PriorityQueue<T> {}
}
