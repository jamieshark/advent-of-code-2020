const assert = require('assert');
const fs = require('fs');

const { funcA } = require('.');

const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');

describe('day-02: Password Philosophy', () => {
  describe('Part One', () => {
    it('should do something', () => {
      const input = true;
      assert.strictEqual(funcA(input), true);
    });

    it('should solve the problem', () => {
      assert.strictEqual(funcA(input), undefined);
    });
  });
});
