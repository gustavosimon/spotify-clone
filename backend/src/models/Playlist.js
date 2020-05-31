import { Schema, model } from 'mongoose';

const PlaylistSchema = new Schema({
  name: String,
});

export default model('Playlist', PlaylistSchema);
