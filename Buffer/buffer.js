const { Buffer } = require('buffer');

const buf = Buffer.from('hello world');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

console.log(Buffer.from('fhqwhgads', 'utf8'));
//Allocates a new Buffer of size bytes. If fill is undefined, the Buffer will be zero-filled.
const buf1 = Buffer.alloc(1)

console.log(buf1);
//You can set a default value if you passed a second value
const buf2 = Buffer.alloc(1, 'a')

console.log(buf2);

/*
In the console you will see:

    68656c6c6f20776f726c64
    aGVsbG8gd29ybGQ=
    <Buffer 66 68 71 77 68 67 61 64 73>
    00

The first element is the value in hex
The second is the value in base64
The third is the value in utf8

The last element
*/