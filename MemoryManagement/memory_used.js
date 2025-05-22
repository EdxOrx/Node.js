// You can see what’s allocated at runtime:

function allocateMemory() {
  // Stack: local variables, function calls
  let stackVar = "I live on the stack";

  // Heap: dynamic object allocation
  const objects = [];
  for (let i = 0; i < 1_000_000; i++) {
    objects.push({ index: i, text: "some random text " + i });
  }

  // External: buffer (off-heap memory)
  const buffer = Buffer.alloc(10 * 1024 * 1024); // 10MB buffer

  // show used memory
  const used = process.memoryUsage();
  for (let key in used) {
    console.log(`${key}: ${(used[key] / 1024 / 1024).toFixed(2)} MB`);
  }
}

allocateMemory();

/**
 * You will see something like this, the values will vary depending on your computer
 *   rss: 168.20 MB           // Process total memory (heap + stack + buffers)
 *   heapTotal: 142.36 MB     // Total size head
 *   heapUsed: 121.77 MB      // Heap used for the objects
 *   external: 11.08 MB       // External memory used (buffers, C++ addons, etc.)
 *   arrayBuffers: 10.01 MB   // Similar to `external` this is for the ArrayBuffers y Buffers
 */