const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
/*
    Heavy function to block the thread on purpose.  
*/
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/* 
    Check if it's the main thread because the Class 'new Worker'
    will execute same file if it's not the main thread the 'workerData'
    is the param we pass to the thread.
*/
if (isMainThread) {
  // Main thread
  console.time('Total');

  const runWorker = (n) => {
    return new Promise((resolve, reject) => {
        /* 
            __filename makes reference to this file and the workerData
            is the argument we are gonna pass to the thread
        */
        const worker = new Worker(__filename, { workerData: n, name: 'MyCustomName' });
        // If everything it's ok resolve the promise
        worker.on('message', resolve);
        // If there is an error reject the promise
        worker.on('error', reject);
    });
  };

    /* 
        Here you run Promise.all to execute runWorker at the same time 
        and because that function run in different threads it will call 
        this same file but it gonna execute the else statement
    */
    Promise.all([runWorker(40), runWorker(40)]).then((results) => {
        console.log('Result:', results);
        console.timeEnd('Total');
    });
} else {
    /* 
        When creating the thread this will be executed the { workerData: n }
        is the param you pass in the second argument when calling new Worker()
    */
    const result = fibonacci(workerData);
    /*
        This parentPort is a conexion between the main thread and the worker
        you could use to get more data but also send data back like the
        postMessage function 
    */
    parentPort.postMessage(result);
}