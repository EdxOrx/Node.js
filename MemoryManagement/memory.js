// You can see what’s allocated at runtime:
const used = process.memoryUsage();
for (let key in used) {
    console.log(`${key}: ${(used[key] / 1024 / 1024).toFixed(2)} MB`);
}

/**
 * You will see something like this, the values will vary depending on your computer
 * 
 *   rss: 25.31 MB
 *   heapTotal: 4.93 MB
 *   heapUsed: 2.85 MB
 *   external: 1.08 MB
 *   arrayBuffers: 0.01 MB
 * 
 */