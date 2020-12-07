module.exports = {
  partOne: (input) => {
    const sum = input.split('\n\n').reduce((count, group) => {
      const answers = group.split('\n').join('').split('');
      return count + new Set(answers).size;
    }, 0);
    return sum;
  },
  partTwo: (input) => {
    const sum = input.split(/\n{2,}/g).reduce((count, group) => {
      const answers = group.split('\n').map((answer) => answer.split(''));
      return (
        count +
        [...new Set(answers.flat())].reduce((sum, question) => {
          return answers.every((answer) => answer.includes(question))
            ? ++sum
            : sum;
        }, 0)
      );
    }, 0);
    return sum;
  },
};
