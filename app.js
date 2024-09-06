import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error) console.log(`Server is successfully running on port ${PORT}`);
  else console.log(`Error occurred, server can't start. Details: ${error}`);
});
