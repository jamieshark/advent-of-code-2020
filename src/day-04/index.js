const isBetween = (val, lo, hi) => {
  return val >= lo && val <= hi;
};

const isValidPassport = (passport, validateFields = false) => {
  // needs all fields, but cid is optional
  const requiredFields = ['ecl', 'pid', 'eyr', 'hcl', 'byr', 'iyr', 'hgt'];

  const hasRequiredFields = requiredFields.every((entry) =>
    Object.keys(passport).includes(entry),
  );

  if (!hasRequiredFields) return false;
  if (!validateFields) return true;
  const validationMap = {
    byr: (yr) => {
      return (
        !isNaN(yr) && yr.toString().length === 4 && isBetween(yr, 1920, 2002)
      );
    },
    iyr: (yr) => {
      return (
        !isNaN(yr) && yr.toString().length === 4 && isBetween(yr, 2010, 2020)
      );
    },
    eyr: (yr) => {
      return (
        !isNaN(yr) && yr.toString().length === 4 && isBetween(yr, 2020, 2030)
      );
    },
    hgt: (height) => {
      const [, measuredHeight, heightUnit] = height.match(/(\d+)(cm|in)?/);
      return (
        (heightUnit === 'cm' && isBetween(measuredHeight, 150, 193)) ||
        (heightUnit === 'in' && isBetween(measuredHeight, 59, 76))
      );
    },
    hcl: (color) => /#[a-f0-9]{6}/.test(color),
    ecl: (color) => /(amb|blu|brn|gry|grn|hzl|oth)/.test(color),
    pid: (id) => /^\d{9}$/.test(id),
    cid: () => true,
  };
  let valid = true;

  Object.entries(passport).forEach(([field, fieldValue]) => {
    if (!validationMap[field](fieldValue)) {
      valid = false;
      return;
    }
  });
  return valid;
};

module.exports = {
  partOne: (input) => {
    const lines = input.split('\n\n').map((item) => {
      const passportEntry = item
        .split('\n')
        .join(' ')
        .split(' ')
        .reduce((acc, currVal) => {
          const kv = currVal.split(':');
          return {
            ...acc,
            [kv[0]]: kv[1],
          };
        }, {});
      return isValidPassport(passportEntry);
    });
    return lines.filter(Boolean).length;
  },
  partTwo: (input) => {
    const lines = input.split('\n\n').map((item) => {
      const passportEntry = item
        .split('\n')
        .join(' ')
        .split(' ')
        .reduce((acc, currVal) => {
          const kv = currVal.split(':');
          return {
            ...acc,
            [kv[0]]: kv[1],
          };
        }, {});
      return isValidPassport(passportEntry, true);
    });
    return lines.filter(Boolean).length;
  },
};
