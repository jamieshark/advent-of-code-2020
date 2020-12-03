module.exports = {
  countTrees: (input) => {
    const treeLines = input.split('\n');
    const tobogganConfig = {
      x: 3,
      y: 1,
    };
    let tobogganPos = {
      x: 0,
      y: 0,
    };
    let treeCount = 0;

    while (tobogganPos.y < treeLines.length) {
      const currentLine = treeLines[tobogganPos.y];
      if (currentLine[tobogganPos.x] === '#') {
        treeCount++;
      }

      tobogganPos.y += tobogganConfig.y;
      tobogganPos.x = (tobogganPos.x + tobogganConfig.x) % currentLine.length;
    }

    return treeCount;
  },
  countTreesAndMultiply: (input) => {
    const treeLines = input.split('\n');
    const tobogganConfig = [
      {
        x: 1,
        y: 1,
      },
      {
        x: 3,
        y: 1,
      },
      {
        x: 5,
        y: 1,
      },
      {
        x: 7,
        y: 1,
      },
      {
        x: 1,
        y: 2,
      },
    ];

    let multipledTrees = 1;

    for (let i = 0; i < tobogganConfig.length; i++) {
      let tobogganPos = {
        x: 0,
        y: 0,
      };
      let treeCount = 0;

      while (tobogganPos.y < treeLines.length) {
        const currentLine = treeLines[tobogganPos.y];
        if (currentLine[tobogganPos.x] === '#') {
          treeCount++;
        }

        tobogganPos.y += tobogganConfig[i].y;
        tobogganPos.x =
          (tobogganPos.x + tobogganConfig[i].x) % currentLine.length;
      }

      multipledTrees = multipledTrees * treeCount;
    }

    return multipledTrees;
  },
};
