# Event loop

This is what allow Node.js to handle async operations without blocking the main thread.

This allows Node.js can execute code, perform input/output (I/O) operations, and respond to events in a non-blocking manner, using only a single thread.

## How does this works?

1. Node.js execute the JS code line by line
2. When this finds an async operation it delegates it to the system (such as the file system or the network).
3. In the mean time Node.js continues executing other parts of the code.
4. When the asynchronous operation completes, its callback is placed in a task queue.
5. The event loop picks up those tasks and executes them one by one when the call stack is empty.
