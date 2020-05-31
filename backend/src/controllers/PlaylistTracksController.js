import PlaylistTracks from '../models/PlaylistTracks';

export default {
  async index(req, res) {
    const playlists = await PlaylistTracks.find({
      playlist: req.params.id,
    })
      .populate('playlist')
      .populate('track');

    return res.json(playlists);
  },

  async store(req, res) {
    const playlist = await PlaylistTracks.create({
      playlist: req.params.id,
      track: req.params.idTrack,
    });

    await playlist.populate('playlist').populate('track').execPopulate();

    return res.json(playlist);
  },
};
