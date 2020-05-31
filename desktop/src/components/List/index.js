import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { MdPlayCircleOutline, MdPauseCircleOutline } from 'react-icons/md';

import { Container, Tr, Td, Play } from './styles';

import { useMusic } from '../../hooks/music';

const data = [
  {
    title: 'Vem me satisfazer',
    artist: 'MC Ingryd',
    album: 'Vem me satisfazer',
    date: 'há 7 dias',
    time: '3:08',
  },
  {
    title: 'Sentadão',
    artist: 'Pedro Sampaio',
    album: 'Sentadão',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Tudo Ok',
    artist: 'Thiaguinho MT',
    album: 'Tudo Ok',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Rave de favela',
    artist: 'MC Lan',
    album: 'Rave de favela',
    date: '19/03/2020',
    time: '3:12',
  },
  {
    title: 'Vem me satisfazer',
    artist: 'MC Ingryd',
    album: 'Vem me satisfazer',
    date: 'há 7 dias',
    time: '3:08',
  },
  {
    title: 'Sentadão',
    artist: 'Pedro Sampaio',
    album: 'Sentadão',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Tudo Ok',
    artist: 'Thiaguinho MT',
    album: 'Tudo Ok',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Rave de favela',
    artist: 'MC Lan',
    album: 'Rave de favela',
    date: '19/03/2020',
    time: '3:12',
  },
  {
    title: 'Vem me satisfazer',
    artist: 'MC Ingryd',
    album: 'Vem me satisfazer',
    date: 'há 7 dias',
    time: '3:08',
  },
  {
    title: 'Sentadão',
    artist: 'Pedro Sampaio',
    album: 'Sentadão',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Tudo Ok',
    artist: 'Thiaguinho MT',
    album: 'Tudo Ok',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Rave de favela',
    artist: 'MC Lan',
    album: 'Rave de favela',
    date: '19/03/2020',
    time: '3:12',
  },
  {
    title: 'Vem me satisfazer',
    artist: 'MC Ingryd',
    album: 'Vem me satisfazer',
    date: 'há 7 dias',
    time: '3:08',
  },
  {
    title: 'Sentadão',
    artist: 'Pedro Sampaio',
    album: 'Sentadão',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Tudo Ok',
    artist: 'Thiaguinho MT',
    album: 'Tudo Ok',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Rave de favela',
    artist: 'MC Lan',
    album: 'Rave de favela',
    date: '19/03/2020',
    time: '3:12',
  },
  {
    title: 'Vem me satisfazer',
    artist: 'MC Ingryd',
    album: 'Vem me satisfazer',
    date: 'há 7 dias',
    time: '3:08',
  },
  {
    title: 'Sentadão',
    artist: 'Pedro Sampaio',
    album: 'Sentadão',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Tudo Ok',
    artist: 'Thiaguinho MT',
    album: 'Tudo Ok',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Rave de favela',
    artist: 'MC Lan',
    album: 'Rave de favela',
    date: '19/03/2020',
    time: '3:12',
  },
  {
    title: 'Vem me satisfazer',
    artist: 'MC Ingryd',
    album: 'Vem me satisfazer',
    date: 'há 7 dias',
    time: '3:08',
  },
  {
    title: 'Sentadão',
    artist: 'Pedro Sampaio',
    album: 'Sentadão',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Tudo Ok',
    artist: 'Thiaguinho MT',
    album: 'Tudo Ok',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Rave de favela',
    artist: 'MC Lan',
    album: 'Rave de favela',
    date: '19/03/2020',
    time: '3:12',
  },
  {
    title: 'Vem me satisfazer',
    artist: 'MC Ingryd',
    album: 'Vem me satisfazer',
    date: 'há 7 dias',
    time: '3:08',
  },
  {
    title: 'Sentadão',
    artist: 'Pedro Sampaio',
    album: 'Sentadão',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Tudo Ok',
    artist: 'Thiaguinho MT',
    album: 'Tudo Ok',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Rave de favela',
    artist: 'MC Lan',
    album: 'Rave de favela',
    date: '19/03/2020',
    time: '3:12',
  },
  {
    title: 'Vem me satisfazer',
    artist: 'MC Ingryd',
    album: 'Vem me satisfazer',
    date: 'há 7 dias',
    time: '3:08',
  },
  {
    title: 'Sentadão',
    artist: 'Pedro Sampaio',
    album: 'Sentadão',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Tudo Ok',
    artist: 'Thiaguinho MT',
    album: 'Tudo Ok',
    date: 'há 7 dias',
    time: '3:12',
  },
  {
    title: 'Rave de favela',
    artist: 'MC Lan',
    album: 'Rave de favela',
    date: '19/03/2020',
    time: '3:12',
  },
];

export default function List() {
  const { play, setPlay, music, setMusic, tracks } = useMusic();

  function handlePlayMusic(musicPlayed) {
    setPlay(true);
    setMusic(musicPlayed);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr key={0}>
            <Td style={{ width: '3%' }} />
            <Td style={{ width: '3%' }} />
            <Td style={{ width: '34%' }}>TITLE</Td>
            <Td style={{ width: '15%' }}>ARTIST</Td>
            <Td style={{ width: '15%' }}>ALBUM</Td>
            <Td style={{ width: '15%' }}>DATA</Td>
            <Td style={{ width: '15%' }}>TEMPO</Td>
          </tr>
        </thead>

        <tbody>
          {tracks.map(track => (
            <Tr key={track._id} active={music.name === track.name}>
              <Td style={{ width: '3%' }}>
                {play && music.name === track.name ? (
                  <Play onClick={() => setPlay(false)}>
                    <MdPauseCircleOutline size={30} color="#fff" />
                  </Play>
                ) : (
                  <Play onClick={() => handlePlayMusic(track)}>
                    <MdPlayCircleOutline size={30} color="#fff" />
                  </Play>
                )}
              </Td>

              <Td style={{ width: '3%' }}>
                <button type="button">
                  <FiHeart size={15} color="#fff" />
                </button>
              </Td>
              <Td style={{ width: '34%' }}>{track.name}</Td>
              <Td style={{ width: '15%' }}>{track.artist}</Td>
              <Td style={{ width: '15%' }}>d.album</Td>
              <Td style={{ width: '15%' }}>{track.updatedAt}</Td>
              <Td style={{ width: '15%' }}>d.time</Td>
            </Tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
