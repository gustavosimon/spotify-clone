import { Schema, model } from 'mongoose';

const TrackSchema = new Schema(
  {
    name: String,
    artist: String,
  },
  {
    timestamps: true,
  }
);

export default model('Track', TrackSchema);
