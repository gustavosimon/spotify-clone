import fs from 'fs';
import { promisify } from 'util';
import Music from '../models/Music';

export default {
  async index(req, res) {
    const musics = await Music.find();
    const highWaterMark = 2;

    const filePath = './public/Vem_Me_Satisfazer.mp3';

    const stat = await promisify(fs.stat)(filePath);

    res.writeHead(200, {
      'Content-Type': 'audio/ogg',
      'Content-Length': stat.size,
    });

    const stream = fs.createReadStream(filePath);

    // só exibe quando terminar de enviar tudo
    stream.on('end', () => console.log('acabou'));

    // faz streaming do audio
    return stream.pipe(res);
  },

  async store(req, res) {
    const music = await Music.create({
      name: 'teste1',
      artist: 'teste1',
    });

    return res.json(music);
  },
};
