import Track from '../models/Track';

export default {
  async index(req, res) {
    const tracks = await Track.find();

    return res.json(tracks);
  },

  async store(req, res) {
    const track = await Track.create({
      name: req.body.name,
      artist: req.body.artist,
    });

    return res.json(track);
  },
};
