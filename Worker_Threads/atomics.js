const { Worker, isMainThread, workerData } = require('worker_threads');

if (isMainThread) {
    /**
     * This code will return a Uint8Array but we only want to know
     * the size of the string so we could only pass the number 11
     * to the SharedArrayBuffer but I want to make this more dynamic
     * it would be 11 because: 
     * 1  2  3  4  5  6  7  8  9  10  11
     * H  e  l  l  o     w  o  r  l   d
     * so it just return the size we want to have in the SharedArrayBuffer
     */
    const text = "Hello world";
    const encoder = new TextEncoder();
    const encoded = encoder.encode(text);

    /**
     * Here we pass the size of the SharedArrayBuffer.
     * We have to pass the size because the SharedArrayBuffer        
     * it's just bytes, there is not format defined there, so
     * you cannot work with the SharedArrayBuffer we make use of the 
     * Uint8Array to read and write numbers in that space.
     */
    const buffer = new SharedArrayBuffer(encoded.length);
    const view = new Uint8Array(buffer);
    /**
     * This TextDecoder it's gonna help us to translate the Uint8Array
     * to something human readable 
     */
    const decoder = new TextDecoder();
    /**
     * This line copies the data inside encoded so at the end
     * this and encoded have the same value which is: "Hello world"
     */
    view.set(encoded);
    /**
     * This show us the value of view: "Hello world"
     */
    console.log("The current value of the view is:", decoder.decode(view))
    /**
     * Execute the thread
     */
    new Worker(__filename, { workerData: buffer });

    setTimeout(() => {
        /**
         * After the worker is executed you can decode the Uint8Array
         * one more time so you can see the text is different
         */
        console.log("Modified text is:",  decoder.decode(view));
    }, 1000);
} else {
    /**
     * The data we pass to the thread is the SharedArrayBuffer
     * but remember that we need Uint8Array to read and write 
     */
    const view = new Uint8Array(workerData);

    /**
     * Now that we can read we need to translate those numbers
     * to something human readable
     */
    const decoder = new TextDecoder();
    const originalText = decoder.decode(view);

    /**
     * Now you can replace the text you want to something else.
     * so we change from: "Hello world" to "Hello my friend"
     */
    const newText = originalText.replace("world", "my friend");
    /**
     * After replacing the text you will have to encode to Uint8Array
     * so you can be able to write in the SharedArrayBuffer
     */
    const encoder = new TextEncoder();
    const newEncoded = encoder.encode(newText);

    /**
     * No we can write in the SharedArrayBuffer
     * but there is a problem, the SharedArrayBuffer has a length of
     * 11 but now the text has 15 letters so we would get and error 
     * trying to run this so we have to remove those 4 letters
     */
    view.set(newEncoded.subarray(0, view.length));
}

/**
 * In console you will see this:
 *    The current value of the view is: Hello world
 *    Modified text is: Hello my fr
 * 
 * So if you notice we modified the string in the thread and we 
 * display it in the main thread
 * 
 * There are some limitations with this because you cannot use 
 * complex data structures like arrays and objects but you 
 * could use JSON.stringify the problem is that this is not very
 * efficient
 */