const assert = require('assert');
const fs = require('fs');

const { passwordCheck, passwordCheckPos } = require('.');

const example = fs.readFileSync(`${__dirname}/example.txt`, 'utf-8');
const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');

describe('day-02: Password Philosophy', () => {
  describe('Part One', () => {
    it('should validate passwords with occurence', () => {
      assert.strictEqual(passwordCheck(example), 2);
    });

    it('should solve the problem', () => {
      assert.strictEqual(passwordCheck(input), 500);
    });
  });

  describe('Part Two', () => {
    it('should validate passwords with position', () => {
      assert.strictEqual(passwordCheckPos(example), 1);
    });

    it('should solve the problem', () => {
      assert.strictEqual(passwordCheckPos(input), 313);
    });
  });
});
