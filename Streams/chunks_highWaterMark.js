const fs = require('fs');

// Read file in 16 bytes chunks
const readable = fs.createReadStream('ThePrince_NiccoloMachiavelli.txt', {
  highWaterMark: 16
});

readable.on('data', chunk => {
  console.log(`Chunk size is: (${chunk.length} bytes):`, chunk.toString());
});

/*
In the console you will see something like:

    Chunk size is: (16 bytes): cribe to our ema
    Chunk size is: (16 bytes): il newsletter to
    Chunk size is: (16 bytes):  hear about new
    Chunk size is: (11 bytes): eBooks.

if you notice every line will have 16 characters including space and
dots etc.

*/ 

