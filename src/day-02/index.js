module.exports = {
  passwordCheck: (input) => {
    const lineItems = input.split('\n');
    const validPasswords = lineItems
      .map((item) => {
        const [range, target, string] = item.split(' ');
        const targetMatch = string.match(new RegExp(target.substr(0, 1), 'g'));
        const targetOccurence = targetMatch ? targetMatch.length : 0;
        const [min, max] = range.split('-');

        return targetOccurence >= min && targetOccurence <= max;
      })
      .filter(Boolean);

    return validPasswords.length;
  },
  passwordCheckPos: (input) => {
    const lineItems = input.split('\n');
    const validPasswords = lineItems
      .map((item) => {
        const [targetPos, target, string] = item.split(' ');
        const [firstPos, secondPos] = targetPos.split('-');
        const targetChar = target.substr(0, 1);
        // adjust for index 0
        const firstMatch = string.substr(firstPos - 1, 1) === targetChar;
        const secondMatch = string.substr(secondPos - 1, 1) === targetChar;

        // valid if there is _not_ more than one, but at least one.
        return !(firstMatch && secondMatch) && (firstMatch || secondMatch);
      })
      .filter(Boolean);

    return validPasswords.length;
  },
};
