import { Schema, model } from 'mongoose';

const MusicSchema = new Schema({
  name: String,
  artist: String,
});

export default model('Music', MusicSchema);
