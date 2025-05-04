/*
    Heavy function to block the thread on purpose.  
*/
function fibonacci(n) { 
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
  
console.time('Total');
console.log('Starting task CPU 1...');
console.time('Task 1');
fibonacci(40);
console.timeEnd('Task 1');

console.log('Starting task CPU 2...');
console.time('Task 2');
fibonacci(40);
console.timeEnd('Task 2');

console.timeEnd('Total');

/**
 * In the terminal you will see something like:
 * 
 * Starting task CPU 1...
 * Task 1: 781.889ms // This could be different
 * Starting task CPU 2...
 * Task 2: 785.725ms // This could be different
 * Total: 1.573s
 * 
 * You will notice the first task blocks the second one
 */