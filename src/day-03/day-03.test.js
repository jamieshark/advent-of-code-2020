const assert = require('assert');
const fs = require('fs');

const { countTrees, countTreesAndMultiply } = require('.');

const example = fs.readFileSync(`${__dirname}/example.txt`, 'utf-8');
const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');

describe('day-03: Toboggan Trajectory', () => {
  describe('Part One', () => {
    it('should count trees', () => {
      assert.strictEqual(countTrees(example), 7);
    });

    it('should solve the problem', () => {
      console.time('time');
      assert.strictEqual(countTrees(input), 268);
      console.timeEnd('time');
    });
  });

  describe('Part Two', () => {
    it('should multiply counted trees', () => {
      assert.strictEqual(countTreesAndMultiply(example), 336);
    });

    it('should solve the problem', () => {
      console.time('time');
      assert.strictEqual(countTreesAndMultiply(input), 3093068400);
      console.timeEnd('time');
    });
  });
});
