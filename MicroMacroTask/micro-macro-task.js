/*
    console.log is executed synchronously within the call stack, 
    so it is not a microtask or a macrotask—it just runs immediately 
    when called.
*/
console.log('From console Number 1');

setTimeout(() => {
    console.log('From setTimeout Number 4');
}, 0);
setImmediate(() => {
    console.log('From setImmediate Number 5');
});

const myPromise = new Promise((resolve, _reject) => {
    resolve("From promise Number 3");
});

myPromise.then((res) => console.log(res));
  

process.nextTick(() => {
  console.log('From process.nextTick Number 2');
});

/*
when you run this `node MicroMacroTask/micro-macro-task.js`

You will see the next result:

    From console Number 1
    From process.nextTick Number 2
    From promise Number 3
    From setImmediate Number 5
    From setTimeout Number 4

This result it's because of the way Microtask and microtask works
if you remember from the readme file the setTimeout and setImmediate
are pushed to the macrotask callstack, and Promise process.nextTick 
are pushed to the microtask callstack.

Once the microtask callstack is empty the event loop will pass the
functions in the macrotask casllstack to the callstack. So that's why 
this weird result

*/