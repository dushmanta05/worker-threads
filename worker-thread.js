import { parentPort } from 'node:worker_threads';

let count = 0;
for (let index = 0; index < 10000000000; index++) {
  count++;
}

parentPort.postMessage(count);
