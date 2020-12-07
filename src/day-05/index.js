module.exports = {
  partOne: (input) => {
    const seatIds = input
      .split('\n')
      .map((line) => parseInt(line.replace(/F|L/g, 0).replace(/B|R/g, 1), 2));

    return Math.max(...seatIds);
  },
  partTwo: (input) => {
    const seatIds = new Set(
      input.split('\n').map((line) => {
        return parseInt(line.replace(/F|L/g, 0).replace(/B|R/g, 1), 2);
      }),
    );

    for (const seatId of seatIds.values()) {
      // our seatID will be between two values in the set
      if (!seatIds.has(seatId - 1) && seatIds.has(seatId - 2)) {
        return seatId - 1;
      }
    }
  },
};
