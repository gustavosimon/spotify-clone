import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

mongoose.connect('mongodb://localhost:27017/spotify', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

app.use(express.json());

app.use(cors());

app.use('/public', express.static(path.resolve(__dirname, '..', 'public')));

app.use(routes);

export default app;
