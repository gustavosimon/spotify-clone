import React, { useState, useRef } from 'react';
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

  const [seeking, setSeeking] = useState(false);

  const playerRef = useRef(null);

  const [volume, setVolume] = useState(0.5);

  function handlePlayMusic(music) {
    setPlay(true);
    setMusic(music);
  }

  function editTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time - minutes * 60);
    return time ? `${minutes}:${seconds < 10 ? '0' : ''}${seconds}` : '0:00';
  }

  function handleSeekMouseDown() {
    setSeeking(true);
  }

  function handleSeekChange({ x }) {
    setProgress({
      ...progress,
      played: x,
    });
  }

  function handleSeekMouseUp(e) {
    console.log(e.target);
    // setSeeking(false);
    // playerRef.current.seekTo(parseFloat(e.target.value));
  }

  function handleProgress(state) {
    if (!seeking) setProgress(state);
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
            <MdSkipNext size={22} color="#fff" />
          </button>
          <button type="button">
            <MdRepeat size={12} color="#fff" />
          </button>
        </Play>

        <div>
          <span>{editTime(progress.playedSeconds)}</span>
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
              },
              disabled: {
                opacity: 0.5,
              },
            }}
            xmax={0.999999}
            xmin={0}
            x={progress.played}
            xstep={0.01}
            onDragStart={handleSeekMouseDown}
            onChange={handleSeekChange}
            on
            onDragEnd={handleSeekMouseUp}
          />
          <span>{editTime(progress.loadedSeconds / progress.loaded)}</span>
        </div>

        <ReactPlayer
          url="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
          playing={play}
          onProgress={handleProgress}
          style={{ display: 'none' }}
          volume={volume}
          ref={playerRef}
        />
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
              '&:active': {
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
              // opacity: 0,
            },
            disabled: {
              opacity: 0.5,
            },
          }}
          xmax={1}
          xmin={0}
          x={volume}
          onChange={({ x }) => setVolume(x)}
          xstep={0.01}
        />
        <button type="button">
          <MdFullscreen size={20} color="#fff" />
        </button>
      </Volume>
    </Container>
  );
}
