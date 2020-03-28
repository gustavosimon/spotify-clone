import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';

class App {
    constructor() {
        this.server = express();

        mongoose.connect('mongodb://localhost:27017/spotify', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
        });

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
        this.server.use(cors());
        this.server.use(express.static('public'));
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;
