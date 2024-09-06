import express from 'express';
import { Worker } from 'node:worker_threads';

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error) console.log(`Server is successfully running on port ${PORT}`);
  else console.log(`Error occurred, server can't start. Details: ${error}`);
});

app.get('/', (_, res) => {
  res.json({ success: true, message: 'Home page' });
});

app.get('/worker', (_, res) => {
  let count = 0;
  for (let index = 0; index < 10000000000; index++) {
    count++;
  }
  res.json({ success: true, message: 'Worker page', value: count });
});

app.get('/worker-thread', (_, res) => {
  const worker = new Worker('./worker-thread.js');
  worker.on('message', (count) => {
    res.json({ success: true, message: 'Worker threads page', value: count });
  });
});
