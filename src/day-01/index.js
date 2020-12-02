module.exports = {
  calculateReport: (input) => {
    const numbers = input.split('\n').map((line) => parseInt(line));

    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === 2020) {
          return numbers[i] * numbers[j];
        }
      }
    }
  },
  calculateReport2: (input) => {
    const numbers = input.split('\n').map((line) => parseInt(line));

    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        for (let k = 0; k < numbers.length; k++) {
          if (numbers[i] + numbers[j] + numbers[k] === 2020) {
            return numbers[i] * numbers[j] * numbers[k];
          }
        }
      }
    }
  },
};
