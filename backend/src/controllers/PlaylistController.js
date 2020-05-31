import Playlist from '../models/Playlist';

export default {
  async index(req, res) {
    const playlists = await Playlist.find();

    return res.json(playlists);
  },

  async store(req, res) {
    const playlist = await Playlist.create({
      name: req.body.name,
    });

    return res.json(playlist);
  },
};
