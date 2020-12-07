const assert = require('assert');
const fs = require('fs');

const { partOne, partTwo } = require('.');

const example = fs.readFileSync(`${__dirname}/example.txt`, 'utf-8');
const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');

describe('day-05: Binary Boarding', () => {
  describe('Part One', () => {
    it('should solve the example', () => {
      assert.strictEqual(partOne(example), 820);
    });

    it('should solve the problem', () => {
      console.time('time');
      assert.strictEqual(partOne(input), 922);
      console.timeEnd('time');
    });
  });

  describe('Part Two', () => {
    it('should solve the example', () => {
      assert.strictEqual(partTwo(example), undefined);
    });

    it('should solve the problem', () => {
      console.time('time');
      assert.strictEqual(partTwo(input), 747);
      console.timeEnd('time');
    });
  });
});
