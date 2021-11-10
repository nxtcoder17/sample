import express from 'express';

const app = express();

app.use('/', (req, res) => {
  res.send({ msg: 'hello' });
})

app.listen(3000, (err) => {
  if (err) throw err
  console.log("started...");
})
