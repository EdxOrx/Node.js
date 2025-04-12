const { createReadStream } = require('fs');

const fileReadStream = createReadStream('ThePrince_NiccoloMachiavelli.txt', {encoding: 'utf8'});

// This is the way to read the chunks of the stream.
fileReadStream.on('data', (chunk) => {
    console.log('Reading the data...');
});

// When the stream has finished to read this callback will be called.
fileReadStream.on('end', () => {
    console.log('No more data to read.');
});

// If something goes wrong it should be handle here.
fileReadStream.on('error', (err) => {
    console.error('Error:', err);
});

fileReadStream.on('close', () => {
    console.log('File closed');
});

/*
As you can see there are 4 events the stream is listening for.

if you see in the console, you will see something like this:

    Reading the data...
    Reading the data...
    Reading the data...
    Reading the data...
    Reading the data...
    No more data to read.
    File closed

You notice there are several 'Reading the data...' logs that's because
that is a chunk of the file, you could print the chunk var inside the 
callback and you will see that's the text of the file. 

once there is no more data it executes the code in the'end' event.

The final event is the 'close' event and it's self explanatory, it closes
the file.

The 'error' event can be used to handle the error.
*/
