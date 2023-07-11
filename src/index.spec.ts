import {lastStoneWeight} from './index';

describe(lastStoneWeight, () => {
  it('should pass example 1', () => {
    expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toBe(1);
  });

  it('should pass example 2', () => {
    expect(lastStoneWeight([1])).toBe(1);
  });
});
