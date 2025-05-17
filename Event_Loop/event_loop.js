console.log("Start");

async function fetchFunction() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log("Finished FETCH:",data[0]);

}
async function fetchFunction1() {
  const response = await fetch('https://dummyjson.com/test');
  const data = await response.json();
  console.log("Finished FETCH 1:",data);
}

console.log("Start FETCH");
fetchFunction().catch(console.error);
console.log("Start FETCH 1");
fetchFunction1().catch(console.error);



async function delayFetch(name, ms) {
  console.log(`Starting delayFetch ${name}`);
  await new Promise(resolve => setTimeout(resolve, ms));
  console.log(`Finished delayFetch ${name}`);
}

delayFetch("A", 2000);
delayFetch("B", 1000);


console.log("Finished");

/**
 * RESULT:
 * **************************************
 * $ node Event_Loop/event_loop.js 
 * Start
 * Start FETCH
 * Start FETCH 1
 * Starting delayFetch A
 * Starting delayFetch B
 * Finished
 * Finished FETCH: { ...
 * Finished FETCH 1: { status: 'ok', method: 'GET' }
 * Finished delayFetch B
 * Finished delayFetch A
 * **************************************
 * 
 * As you can see the FETCH, FETCH 1, delayFetch("A") and delayFetch("B")
 * are async operations and does not block the main thread and those
 * are executed on the background once the the tasks are finished their
 * callback or promise is passed to the event loop it's executed when 
 * the stack is free 
 * 
 */