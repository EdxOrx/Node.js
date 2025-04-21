# Buffer

## What is a buffer?

In general Buffer is a space in memory to save data binary data temporally, the main reason to avoid losing the data while transfering and try to do a balance between the transmitter and receiver

In JS is an object/class that allow us to to work with binary data.

Buffers are very important while working with streams because JS strings are not the best option when working with binary data, buffers help us to solve this problem.

There are some characteristics for this object:

- These are design to save and manipulate binary data very efficient
- once is created the size cannot be chaged
- Convert the format of the data eg: buffer to txt
- Can work with different encodigs

There are several enconding types:

- `utf8` : DEFAULT. encodes to unicode in a secuence of bystes from 1 to 4
- `utf16le` : encodes each character as 2 bytes
- `latin1` : Represent the 256 characters using 1 byte per character
- `base64` : Encodes binary data as ASCII for text using 64 characters
- `base64url` : This is like base64 but for urls(without `/`, `+` `=`)
- `hex` : Encodes each byte in 2 hex digits
- `ascii` : Encodes character from 0 to 127(7 bits)

## What is a encoding?

It's the way to convert text to bytes
EG: the 'A' can be represented like:

- `0x41` in ascii
- `0x0041` in utf16le
- `0x41` in utf8
- `Q==` in base64

## What's the purpose for having too many encondigs?

1. Compatibility among systems
   - Some old systems undesrtand `latin1` and `ascii`
2. Transmit and save data
   - `base64` converts any binary file to string
3. Security
   - `base64rl` it's used for JWT, cookies etc. to avoid conflicts in URLs
4. Debugging
   - `hex` it's used to represent binary data

## When to use each one?

- `utf8` : Whenever is possible
- `latin1` : Compatibility with old systems
- `base64`/`base64url` : if you need to tsend files and binary data in text
- `hex` : to display, compare and save binary as text
- `ascii` : for simple stuff
