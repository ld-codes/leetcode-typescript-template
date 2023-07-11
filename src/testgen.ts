import clipboard from 'clipboardy';

const test = Array(30)
  .fill(0)
  .map(() => Math.ceil(Math.random() * 1000));

clipboard.writeSync(JSON.stringify(test));
console.log('Test case copied to clipboard!');
