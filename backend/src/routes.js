import Router from 'express';

import MusicController from './controllers/MusicController';

const routes = new Router();

routes.post('/music', MusicController.store);
routes.get('/music', MusicController.index);

export default routes;
