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