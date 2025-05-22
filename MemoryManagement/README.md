# Memory management

Node.js is built on the V8 JavaScript engine, and it handles memory management using automatic garbage collection, so we as developers don’t manually allocate or free memory.

## 1. Memory Allocation

Node.js manages native resources like:

- Buffers (e.g., for binary data)
- File descriptors
- Network sockets

Javascript automatically allocate:

- You declare variables
- Create objects or arrays
- Use closures or functions

## 2. Memory Limits

By default, Node.js has a memory limit (per process):

- 1.5 GB on 64-bit systems
- 0.5 GB on 32-bit systems

this can be increased using the command:

```
node --max-old-space-size=4096 script_name.js
```

## 3. Memory Segments

- Heap: This a large region of memory used to save Stores objects, closures, arrays etc, created at runtime, the GC runs here to clean up unused memory.

- Stack: This is a smaller and faster region to of memory used for static memory allocation it stores Function calls, local variables, function parameters, this is faster to allocate and deallocate memory on the stack, but it's limited size.

- Code: Memory area containing compiled machine code, V8 store the compiled JS to optimized machine code so this improves the code performance.

- C++ bindings and Buffers: Memory used outside the V8 heap, like Node.js core modules written in C++ eg:

  - Buffers (Buffer.alloc, Buffer.from)

    this allows an interaction with lower-level system features like file systems.
    This is not automatically garbage collected by V8, so mismanagement can cause memory leaks or high memory usage.
