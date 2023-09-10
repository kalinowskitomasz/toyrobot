const fs = require('fs');
const { ToyRobot } = require('./robot');
const { parseCommands } = require('./parser');

function main() {
  const robot = new ToyRobot();

  // Check if a file argument is provided
  if (process.argv.length >= 3) {
    const filePath = process.argv[2];

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        return;
      }

      const commands = data.split('\n');
      parseCommands(commands, robot);
    });
  } else {
    // If no file argument is provided, read from standard input
    let inputBuffer = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (chunk) => {
      inputBuffer += chunk;
    });

    process.stdin.on('end', () => {
      const commands = inputBuffer.split('\n');
      parseCommands(commands, robot);
    });
  }
}

main();
