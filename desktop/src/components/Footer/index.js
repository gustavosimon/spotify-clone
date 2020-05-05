import React, { useState } from 'react';
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
} from 'react-icons/md';

import disc from '../../assets/disc.png';
import ReactPlayer from 'react-player';
import ReactInputSlider from 'react-input-slider';

import { useMusic } from '../../hooks/music';

import { Container, Wrapper, Music } from './styles';

export default function Footer() {
  const { play, setPlay, music, setMusic } = useMusic();

  const [progress, setProgress] = useState({});

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
        <div>
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
        </div>
        <ReactInputSlider
          styles={{
            active: {
              backgroundColor: '#B3B3B3',
              height: 5,
              '&:hover': {
                backgroundColor: 'rgba(30, 215, 96)',
              },
            },
            track: {
              backgroundColor: '#404040',
              height: 5,
              width: 650,
            },
            thumb: {
              width: 10,
              height: 10,
              opacity: 0,
            },
          }}
          xmax={progress.loadedSeconds}
          x={progress.playedSeconds}
        />
        {/* <ReactPlayer
          url="http://localhost:3333/public/Vem_Me_Satisfazer.mp3"
          playing={play}
          onProgress={setProgress}
        /> */}
      </Wrapper>
      <div>final</div>
    </Container>
  );
}
