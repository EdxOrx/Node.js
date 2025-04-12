const { Duplex } = require('stream');

const duplex = new Duplex({
  allowHalfOpen: false,
  read() {
    this.push('Reading...\n');
    this.push(null); // End read
  },
  write(chunk, encoding, callback) {
    console.log('Writing:', chunk.toString());
    callback();
  }
});

// consume stream
duplex.pipe(process.stdout);

duplex.on('end', () => {
  console.log('-> Read finished');
});

duplex.on('close', () => {
  console.log('-> Stream closed');
});

duplex.write('Writing...\n');


/*
In the console you will see:

    Writing: Writing...

    Reading...
    -> Read finished
    -> Stream closed

This closes automatically the writing once the code is executed
if you pass allowHalfOpen:true you will have to close the 
stream.
*/