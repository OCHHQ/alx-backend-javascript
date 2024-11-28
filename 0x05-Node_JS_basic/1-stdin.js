// 1-stdin.js
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Check if we're in an interactive terminal or receiving piped input
if (process.stdin.isTTY) {
  // Interactive mode
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
  });

  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
} else {
  // Non-interactive mode (e.g., piped input)
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
  });

  process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
