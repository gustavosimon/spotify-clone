import PlaylistTracks from '../models/PlaylistTracks';

export default {
  async index(req, res) {
    const playlistTrack = await PlaylistTracks.find({
      playlist: req.params.id,
    })
      .populate('playlist')
      .populate('track');

    return res.json(playlistTrack);
  },

  async store(req, res) {
    const findPlaylistTrack = await PlaylistTracks.findOne({
      playlist: req.params.id,
      track: req.params.idTrack,
    });

    if (findPlaylistTrack)
      return res.json({ message: 'Track already exists in this playlist' });

    const playlistTrack = await PlaylistTracks.create({
      playlist: req.params.id,
      track: req.params.idTrack,
    });

    await playlistTrack.populate('playlist').populate('track').execPopulate();

    return res.json(playlistTrack);
  },
};
