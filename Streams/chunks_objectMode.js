const { Readable } = require('stream');

const objStream = new Readable({
  objectMode: true,
  read() {
    this.push({ name: 'Juan' });
    this.push({ name: 'Ana' });
    this.push({ name: 'Mar' });
    this.push(null);
  }
});

objStream.on('data', obj => {
  console.log('Object:', obj);
  console.log('Treat as object:', obj?.name);
});

/*
In console you will see:
    Object: { name: 'Juan' }
    Treat as object: Juan
    Object: { name: 'Ana' }
    Treat as object: Ana
    Object: { name: 'Mar' }
    Treat as object: Mar

This could be really useful if you need to read some data so 
you avoid doing any kind of parsing
*/