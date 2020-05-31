import Router from 'express';

import TrackController from './controllers/TrackController';
import PlaylistController from './controllers/PlaylistController';
import PlaylistTracksController from './controllers/PlaylistTracksController';

const routes = new Router();

routes.get('/track', TrackController.index);
routes.post('/track', TrackController.store);

routes.get('/playlist', PlaylistController.index);
routes.post('/playlist', PlaylistController.store);

routes.get('/playlist-tracks/:id', PlaylistTracksController.index);
routes.post('/playlist-tracks/:id/:idTrack', PlaylistTracksController.store);

export default routes;
