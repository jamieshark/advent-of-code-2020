const assert = require('assert');
const fs = require('fs');

const { partOne, partTwo } = require('.');

const example = fs.readFileSync(`${__dirname}/example.txt`, 'utf-8');
const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');

describe('day-04: TITLE', () => {
  describe('Part One', () => {
    it('should solve the example', () => {
      assert.strictEqual(partOne(example), 2);
    });

    it('should solve the problem', () => {
      console.time('time');
      assert.strictEqual(partOne(input), 256);
      console.timeEnd('time');
    });
  });

  describe('Part Two', () => {
    it('should solve the example', () => {
      assert.strictEqual(partTwo(example), 2);
    });

    it('should solve the problem', () => {
      console.time('time');
      assert.strictEqual(partTwo(input), 198);
      console.timeEnd('time');
    });
  });
});
