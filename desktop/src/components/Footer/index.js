import React, { useState, useRef, useMemo } from 'react';
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

import disc from '../../assets/disc.png';
import editTime from '../../utils/editTime';
import { useMusic } from '../../hooks/music';
import Slider from '../Slider';

import { Container, Wrapper, Music, Volume, Play } from './styles';

export default function Footer() {
  const { play, setPlay, music, setMusic } = useMusic();

  const [progress, setProgress] = useState({});
  const [volume, setVolume] = useState(0.3);

  const playerRef = useRef(null);

  function handlePlayMusic(musicPlayed) {
    setPlay(true);
    setMusic(musicPlayed);
  }

  function handleSeekChange(value) {
    setProgress({
      ...progress,
      played: value,
    });

    playerRef.current.seekTo(parseFloat(value));
  }

  function handleProgress(state) {
    setProgress(state);
  }

  const progressFormatted = useMemo(
    () => ({
      ...progress,
      initialTime: editTime(progress.playedSeconds),
      finalTime: editTime(progress.loadedSeconds / progress.loaded),
    }),
    [progress]
  );

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
          <span>{progressFormatted.initialTime}</span>

          <Slider
            state={progress.played}
            width={650}
            max={1}
            onChange={handleSeekChange}
          />

          <span>{progressFormatted.finalTime}</span>
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

        <Slider
          state={volume}
          width={80}
          max={1}
          onChange={value => setVolume(value)}
        />

        <button type="button">
          <MdFullscreen size={20} color="#fff" />
        </button>
      </Volume>
    </Container>
  );
}
