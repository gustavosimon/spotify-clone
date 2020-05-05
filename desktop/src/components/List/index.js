import React from 'react';
import { FiHeart, FiPlay, FiPause } from 'react-icons/fi';

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
  const { play, setPlay, music, setMusic } = useMusic();

  function handlePlayMusic(music) {
    setPlay(true);
    console.log(music);
    setMusic(music);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr key={0}>
            <Td style={{ width: '3%' }}></Td>
            <Td style={{ width: '3%' }}></Td>
            <Td style={{ width: '34%' }}>TITLE</Td>
            <Td style={{ width: '15%' }}>ARTIST</Td>
            <Td style={{ width: '15%' }}>ALBUM</Td>
            <Td style={{ width: '15%' }}>DATA</Td>
            <Td style={{ width: '15%' }}>TEMPO</Td>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <Tr key={i} active={music.title === d.title}>
              <Td style={{ width: '3%' }}>
                {play && music.title === d.title ? (
                  <Play onClick={() => setPlay(false)}>
                    <FiPause size={15} color="#fff" />
                  </Play>
                ) : (
                  <Play onClick={() => handlePlayMusic(d)}>
                    <FiPlay size={15} color="#fff" />
                  </Play>
                )}
              </Td>
              <Td style={{ width: '3%' }}>
                <button>
                  <FiHeart size={15} color="#fff" />
                </button>
              </Td>
              <Td style={{ width: '34%' }}>{d.title}</Td>
              <Td style={{ width: '15%' }}>{d.artist}</Td>
              <Td style={{ width: '15%' }}>{d.album}</Td>
              <Td style={{ width: '15%' }}>{d.date}</Td>
              <Td style={{ width: '15%' }}>{d.time}</Td>
            </Tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
