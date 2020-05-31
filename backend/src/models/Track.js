import { Schema, model } from 'mongoose';

const TrackSchema = new Schema(
  {
    name: String,
    artist: String,
    album: String,
    time: String,
  },
  {
    timestamps: true,
  }
);

export default model('Track', TrackSchema);
