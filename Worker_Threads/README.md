# Worker threads

Before starting with worker threads there you must understand 2 important concepts:

## Concurrency:

Is the capability to execute several task but NOT at the same time

you can think of this as a chef doing cooking SEVERAL dishes at once and it's doing everything like cutting vegetables, checking the oven, giving the food to the waiter etc.

Visually you would see it like this:

```
Time →
Task A:  ███       ███         ███
Task B:     ███       ███
Task C:          ███       ███
```

## Parallelism:

Is the capability to execute several task at the same time using several threads

you can think of this as having one chef per dish at the same time.

```
Tiempo →
CPU1: Task A: █████████████████
CPU2: Task B: █████████████████
CPU3: Task C: █████████████████
```

You may think what should we use concurrency if paralellism it's better but that's not necessarily true because it depends what you are trying to do one culd be better than the other.

Concurrency is good for:

- API calls
- DB access
- read and write files
- sockets

You do not need to use threads becasue the event loop already handle those tasks.

Paralellism is good for:

- image/video processing
- heavy calculatios
- compress files
- AI related stuff like Machine learning

If you don't use threads these kind of tasks will block the event loop.

Now you realize that both handle different kind of tasks and there is no bad or good option.

### So in simple words `worker threads` is a way to execute JS in different threads inside the same process.

The `worker` is the instance of the thread

- Share the same memory of the process
- Communicates with the main thread using the `message` function
- Does not block the event loop

Workers has different events:

- `message` : The `'message'` event is emitted when the worker thread has invoked parentPort.postMessage().
- `exit` : The `'exit'` event is emitted once the worker has stopped. If the worker exited by calling process.exit(), the exitCode parameter is the passed exit code. If the worker was terminated, the exitCode parameter is 1. This is the final event emitted by any Worker instance.
- `error` : The `'error'` event is emitted if the worker thread throws an uncaught exception. In that case, the worker is terminated.
- `online`: The `'online'` event is emitted when the worker thread has started executing JavaScript code.

The options are:

- `argv`: List of arguments which would be stringified and appended to process.argv in the worker. This is mostly similar to the workerData but the values are available on the global process.argv as if they were passed as CLI options to the script.
- `workerdata`: The data we want to pass to the worker thread. This data is cloned in worker with HTML structured clone algorithm.
- `transferList`: Its and array of items which should ArrayBuffer | MessagePort | FileHandle | X509Certificate | Blob. If one or more MessagePort-like objects are passed in workerData, a transferList is required for those items or ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST is thrown.
- `env`: If set, specifies the initial value of process.env inside the Worker thread. As a special value, worker.SHARE_ENV may be used to specify that the parent thread and the child thread should share their environment variables; in that case, changes to one thread's process.env object affect the other thread as well.
- `resourceLimits`: An optional set of resource limits for the new JS engine instance. Reaching these limits leads to termination of the Worker instance. These limits only affect the JS engine, and no external data, including no ArrayBuffer. Even if these limits are set, the process may still abort if it encounters a global out-of-memory situation. Some of constraints are maxYoungGenerationSizeMb (The maximum size of the main heap in MB),maxOldGenerationSizeMb codeRangeSizeMb stackSizeMb
- `name`: An optional name to be appended to the worker title for debugging/identification purposes, making final title as [worker ${id}] ${name}. By default: ''.

Also it's possible to communicate between the threads using `MessageChannel` you can clone, transfer and share the same data but this comes with a synchronizatio problem so to fix this there is something called `Atomics`.

## Atomics

When memory is shared, multiple threads can read and write the same data in memory. Atomic operations make sure that operations are finished before the next operation starts and that operations are not interrupted

- `Atomics.load()`:Returns the value at the specified index of the array. Kind of getter for index.
- `Atomics.store()`: Stores a value at the specified index of the array. Returns the value.
- `Atomics.and()/Atomics.or()/Atomics.sub()/Atomics.xor()/Atomics.add()`: Bitwise operations
- `Atomics.notify()/Atomics.wait()`: Provides ways for waiting until a certain condition becomes true and are typically used as blocking constructs.
