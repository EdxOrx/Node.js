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

### Difference between duplex and transform

The main diference between those types of stream is the duplex strem is independent as an example in a video call you can 'write' and 'read' but that does not depend on what you are talking

In a transform stream is more like a process in the same example you can think of a video call and if you want to process the audio or video to something like a translator so depend on the input.

```
                    Duplex Stream
                ------------------|
        Read  <-----               External Source
You           ------------------|
        Write ----->               External Sink
                ------------------|
You don't get what you write. It is sent to another source.
```

```
                            Transform Stream
                    --------------|--------------
    You     Write  ---->                   ---->  Read  You
                    --------------|--------------
    You write something, it is transformed, then you read something.
```

[user568109 (20 Ago 2013). NodeJS: What's the difference between a Duplex stream and a Transform stream?](https://stackoverflow.com/questions/18335499/nodejs-whats-the-difference-between-a-duplex-stream-and-a-transform-stream)

## piping

When using streams in Node.js there is a function `pipe`, this function allow us to connect readable streams to a writable stream making easy to handle straming operations with less code.

## Chunk

Something important in streams are chunks that's basically the data already 'divided' you are transmitting over the stream

The chunks can be modified in some ways like the size of the chunk.

These are the options.

| Mes           | Stream             | Purpose                                                                         |
| ------------- | ------------------ | ------------------------------------------------------------------------------- |
| highWaterMark | all                | The maximum number of bytes to store in the internal buffer. Default=16kb       |
| objectMode    | all                | Whether this stream should behave as a stream of objects                        |
| encoding      | Readable, Writable | buffers will be decoded to strings                                              |
| allowHalfOpen | Duplex, Socket     | automatically end the readable side when the writable side ends and vice versa. |
