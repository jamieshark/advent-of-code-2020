const assert = require('assert');
const callerPath = require('caller-path');

const fs = require('fs');
const { calculateReport, calculateReport2 } = require('./report');

const input = fs.readFileSync(`${__dirname}/input.txt`, 'utf-8');

describe('Day 1: Report Repair', () => {
  describe('Part One', () => {
    it('should determine numbers adding to 2020', () => {
      const numbers = `1721
         979
         366
         299
         675
         1456`;

      assert.strictEqual(calculateReport(numbers), 514579);
    });

    it('should solve the problem', () => {
      assert.strictEqual(calculateReport(input), 713184);
    });
  });

  describe('Part Two', () => {
    it('should determine three numbers adding to 2020', () => {
      const numbers = `1721
         979
         366
         299
         675
         1456`;

      assert.strictEqual(calculateReport2(numbers), 241861950);
    });

    it('should solve the problem', () => {
      assert.strictEqual(calculateReport2(input), 713184);
    });
  });
});
