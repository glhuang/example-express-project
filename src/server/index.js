import express from 'express';
import { template } from './helpers';

const app = express();

app.use('/build', express.static('build'));

app.get('*', (req, res) => {
  res.send(template())
})

app.listen(3000);
