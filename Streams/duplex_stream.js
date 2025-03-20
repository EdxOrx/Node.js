const { Duplex } = require('stream');

class DuplexExample extends Duplex{
    // Add new prop to class
    constructor(){
        super();
        this.index = 0;
    }

    // Override the read function
    _read(size) {
        // This adds data to the stream
        this.push(`Message number ${this.index++}`);

        // Stop adding numbers
        if (Math.random() > 0.9) this.push(null);
    }

    // Override the write function
    _write(chunk, encoding, callback) {
        console.log(`Received: ${chunk.toString()}`);
        callback(); 
    }
};

const duplexStream = new DuplexExample();

// Listener for the data event so everything we add data this will run
duplexStream.on('data', (chunk) => console.log(`Sent: ${chunk.toString()}`));

duplexStream.write('Hello, Duplex!');
duplexStream.end();
