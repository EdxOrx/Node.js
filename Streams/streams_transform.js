const { Transform } = require('stream');

const toUpperCase = new Transform({
    transform(chunk, encoding, callback) {
        // Convert text to uppercase
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

// Pipe input from the terminal to the transformer and display it
process.stdin.pipe(toUpperCase).pipe(process.stdout);
