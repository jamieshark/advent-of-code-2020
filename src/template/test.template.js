module.exports = (day) => `
const assert = require('assert');
const fs = require('fs');

const { partOne, partTwo } = require('.');

const example = fs.readFileSync(\`$\{__dirname}/example.txt\`, 'utf-8');
const input = fs.readFileSync(\`$\{__dirname}/input.txt\`, 'utf-8');

describe('${day}: TITLE', () => {
  describe('Part One', () => {
    it('should solve the example', () => {
      const input = true;
      assert.strictEqual(partOne(example), example);
    });

    it('should solve the problem', () => {
      console.time('time');
      assert.strictEqual(partOne(input), input);
      console.timeEnd('time');
    });
  });

  describe('Part Two', () => {
    it('should solve the example', () => {
      const input = true;
      assert.strictEqual(partTwo(example), example);
    });

    it('should solve the problem', () => {
      console.time('time');
      assert.strictEqual(partTwo(input), input);
      console.timeEnd('time');
    });
  });
});
`;
