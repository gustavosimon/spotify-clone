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
        <img
          src={
            music._id ? `http://localhost:3333/public/${music._id}.jpg` : disc
          }
          alt={music.name}
        />
        <div>
          <span>
            {music.name}
            <button type="button">
              <FiHeart size={12} color="#fff" />
            </button>
          </span>
          <span>{music.artist}</span>
        </div>
      </Music>

      <Wrapper>
        <Play>
          <button type="button" disabled={!music._id}>
            <MdShuffle size={12} color="#fff" />
          </button>

          <button type="button" disabled={!music._id}>
            <MdSkipPrevious size={22} color="#fff" />
          </button>

          {play ? (
            <button
              type="button"
              onClick={() => setPlay(false)}
              disabled={!music._id}
            >
              <MdPauseCircleOutline size={28} color="#fff" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => handlePlayMusic(music)}
              disabled={!music._id}
            >
              <MdPlayCircleOutline size={28} color="#fff" />
            </button>
          )}

          <button type="button" disabled={!music._id}>
            <MdSkipNext size={22} color="#fff" />
          </button>

          <button type="button" disabled={!music._id}>
            <MdRepeat size={12} color="#fff" />
          </button>
        </Play>

        <div>
          <span>{progressFormatted.initialTime}</span>

          <Slider
            disabled={!music._id}
            state={progress.played}
            width={650}
            max={1}
            onChange={handleSeekChange}
          />

          <span>{progressFormatted.finalTime}</span>
        </div>

        <ReactPlayer
          url={`http://localhost:3333/public/${music._id}.mp3`}
          playing={play}
          onProgress={handleProgress}
          style={{ display: 'none' }}
          volume={volume}
          ref={playerRef}
        />
      </Wrapper>

      <Volume>
        <button type="button" disabled={!music._id}>
          <MdList size={20} color="#fff" />
        </button>

        <button type="button" disabled={!music._id}>
          <MdDevices size={20} color="#fff" />
        </button>

        <button type="button" disabled={!music._id}>
          <MdVolumeUp size={20} color="#fff" />
        </button>

        <Slider
          disabled={!music._id}
          state={volume}
          width={80}
          max={1}
          onChange={value => setVolume(value)}
        />

        <button type="button" disabled={!music._id}>
          <MdFullscreen size={20} color="#fff" />
        </button>
      </Volume>
    </Container>
  );
}
