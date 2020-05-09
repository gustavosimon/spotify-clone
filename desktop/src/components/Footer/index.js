import React, { useState } from 'react';
import {
  MdPlayCircleOutline,
  MdPauseCircleOutline,
  MdSkipNext,
  MdSkipPrevious,
  MdList,
  MdDevices,
  MdVolumeUp,
  MdFullscreen,
  MdRepeat,
  MdShuffle,
} from 'react-icons/md';

import { FiHeart } from 'react-icons/fi';

import ReactPlayer from 'react-player';
import ReactInputSlider from 'react-input-slider';
import disc from '../../assets/disc.png';

import { useMusic } from '../../hooks/music';

import { Container, Wrapper, Music, Volume, Play } from './styles';

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
          <button type="button">
            <FiHeart size={12} color="#fff" />
          </button>
        </div>
      </Music>
      <Wrapper>
        <Play>
          <button type="button">
            <MdShuffle size={12} color="#fff" />
          </button>
          <button type="button">
            <MdSkipPrevious size={22} color="#fff" />
          </button>
          {play ? (
            <button type="button" onClick={() => setPlay(false)}>
              <MdPauseCircleOutline size={28} color="#fff" />
            </button>
          ) : (
            <button type="button" onClick={() => handlePlayMusic(music)}>
              <MdPlayCircleOutline size={28} color="#fff" />
            </button>
          )}
          <button type="button">
            <MdSkipNext size={26} color="#fff" />
          </button>
          <button type="button">
            <MdRepeat size={12} color="#fff" />
          </button>
        </Play>
        <div>
          <span>4:00</span>
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
              disabled: {
                opacity: 0.5,
              },
            }}
            xmax={progress.loadedSeconds}
            x={progress.playedSeconds}
          />
          <span>4:00</span>
        </div>
        {/* <ReactPlayer
          url="http://localhost:3333/public/Vem_Me_Satisfazer.mp3"
          playing={play}
          onProgress={setProgress}
        /> */}
      </Wrapper>
      <Volume>
        <button type="button">
          <MdList size={20} color="#fff" />
        </button>
        <button type="button">
          <MdDevices size={20} color="#fff" />
        </button>
        <button type="button">
          <MdVolumeUp size={20} color="#fff" />
        </button>
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
              width: 80,
            },
            thumb: {
              width: 10,
              height: 10,
              opacity: 0,
            },
            disabled: {
              opacity: 0.5,
            },
          }}
          xmax={progress.loadedSeconds}
          x={progress.playedSeconds}
        />
        <button type="button">
          <MdFullscreen size={20} color="#fff" />
        </button>
      </Volume>
    </Container>
  );
}
