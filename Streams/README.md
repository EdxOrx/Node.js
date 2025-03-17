# Streams

Streams are useful to read and write data, especially large files.

The data can be processed in chunks instead of loading a huge file into memory at once.

There are 4 types of streams in Node.js:

- Readable Streams: Read data
- Writable Streams: Write data
- Duplex Streams: Read and write data
- Transform Streams: This type of stream is able to modify the data while reading it.

Streams might seem boring but it's not.

You can build interesting stuffs with Streams like:

- Process data on the fly: You could modify data while it's being read or written without waiting for the entire dataset to be loaded into memory.

- Process data in real time: Using streams you could make real time applications like websockets, audio and video streaming.

- Handling files: Instead of loading a huge file into memory that could crash your app you could use streams to efficiently handle huge files.
