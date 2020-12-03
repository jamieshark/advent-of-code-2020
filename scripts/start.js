const { readdirSync, writeFile, copyFile, mkdir } = require('fs');
const testTemplate = require('../src/template/test.template.js');
const day = process.argv[2];
const days = readdirSync('./src');

if (!day) {
  console.error('Please enter a day number.');
}

if (!days.includes(day)) {
  console.log(`Creating new directory for ${day}...`);

  mkdir(`src/${day}`, (err) => {
    if (err) {
      console.warn(err);
    }
    copyFile('src/template/index.js', `src/${day}/index.js`, (err) => {
      if (err) {
        console.warn(err);
      }
    });

    console.log('Creating blank input file.');
    writeFile(`src/${day}/input.txt`, '', (err) => {
      if (err) {
        console.warn(err);
      }
      console.log('Created blank input file.');
    });

    console.log('Creating blank example file.');
    writeFile(`src/${day}/example.txt`, '', (err) => {
      if (err) {
        console.warn(err);
      }
      console.log('Created blank example file.');
    });

    console.log('Creating blank README file.');
    writeFile(`src/${day}/README.md`, '', (err) => {
      if (err) {
        console.warn(err);
      }
      console.log('Created blank README file.');
    });

    console.log('Creating test file.');
    writeFile(`src/${day}/${day}.test.js`, testTemplate(day), (err) => {
      if (err) {
        console.warn(err);
      }
      console.log('Created test file. All set!');
    });
  });
}
