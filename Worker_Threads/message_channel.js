const { Worker, isMainThread, MessageChannel, workerData } = require('worker_threads');

if (isMainThread) {
    const { port1, port2 } = new MessageChannel();

    /*
        We create 2 workers and assign a port to each one
    */
    const workerA = new Worker(__filename, { 
        workerData: { name: 'A', port: port1 }, 
        transferList: [port1] 
    });
    const workerB = new Worker(__filename, { 
        workerData: { name: 'B', port: port2 }, 
        transferList: [port2] 
    });

    workerA.on('exit', () => console.log('Worker A finished'));
    workerB.on('exit', () => console.log('Worker B finished'));
} else {
    /* 
        This is the params we pass when the workers were created
    */
    const { name, port } = workerData;

    port.on('message', (msg) => {
        console.log(`[Worker ${name}] recieved:`, msg);

        // Simulate we send data from the port1 to B
        if (name === 'A' && msg === 'Hi this is B') {
            port.postMessage('Hey B! I am A.');
            // close the port 
            port.close()
        }

        // When B has a reponse we close the port
        if (name === 'B' && msg === 'Hey B! I am A.') {
            port.close();
        }
    });

    // Simulate we send data from the port2 to start using the ports
    if (name === 'B') {
        setTimeout(() => {
            port.postMessage('Hi this is B');
        }, 100);
    }
}
