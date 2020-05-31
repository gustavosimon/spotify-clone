import { Schema, model } from 'mongoose';

const PlaylistTracksSchema = new Schema({
  playlist: {
    type: Schema.Types.ObjectId,
    ref: 'Playlist',
  },
  track: {
    type: Schema.Types.ObjectId,
    ref: 'Track',
  },
});

export default model('PlaylistTrack', PlaylistTracksSchema);
