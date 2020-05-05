import React from 'react';
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';

import disc from '../../assets/disc.png';
import ReactPlayer from 'react-player';

import { useMusic } from '../../hooks/music';

import { Container, Wrapper, Music } from './styles';

export default function Footer() {
  const { play, setPlay, music, setMusic } = useMusic();

  function handlePlayMusic(music) {
    setPlay(true);
    setMusic(music);
  }

  return (
    <Container>
      <Music>
        <img src={disc} alt="Imagem de disco" />
        <div>
          <span>{music.title}</span>
          <span>{music.artist}</span>
        </div>
      </Music>
      <Wrapper>
        <button type="button">
          <MdSkipPrevious size={26} color="#fff" />
        </button>
        {play ? (
          <button type="button" onClick={() => setPlay(false)}>
            <MdPauseCircleOutline size={32} color="#fff" />
          </button>
        ) : (
          <button type="button" onClick={() => handlePlayMusic(music)}>
            <MdPlayCircleOutline size={32} color="#fff" />
          </button>
        )}
        <button type="button">
          <MdSkipNext size={26} color="#fff" />
        </button>
        <ReactPlayer
          url="http://localhost:3333/public/Vem_Me_Satisfazer.mp3"
          playing={play}
        />
      </Wrapper>
      <div>final</div>
    </Container>
  );
}
