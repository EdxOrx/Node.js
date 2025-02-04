# Micro task and microtask

The term microtask makes reference to the tasks that have the highest priority.
These task are executed in the Microtask Queue before the Task Queue o Macrotask Queue.

The microtasks in Node.js are:

- Promises like:
  - Promise.then
  - catch
  - finally
- process.nextTick
- queueMicrotask()

The Macrotask in Node.js are:

- Timers:
  - setTimeout
  - setInterval
  - setImmediate
- Read and write files
- Request like HTTP and websockets
- DB queries
- events like the 'events' library
- Streams
- system API
