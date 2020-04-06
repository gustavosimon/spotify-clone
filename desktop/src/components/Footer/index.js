import React from 'react';
import {
    MdPlayCircleOutline,
    MdPauseCircleOutline,
    MdSkipNext,
    MdSkipPrevious,
} from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';

import disc from '../../assets/disc.png';
import ReactPlayer from 'react-player';

import { Container, Wrapper, Music } from './styles';
import { pauseMusic, playMusic } from '../../store/modules/play/actions';

export default function Footer() {
    const dispatch = useDispatch();

    const music = useSelector(state => state.play.music);
    const play = useSelector(state => state.play.play);

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
                    <button
                        type="button"
                        onClick={() => dispatch(pauseMusic())}
                    >
                        <MdPauseCircleOutline size={32} color="#fff" />
                    </button>
                ) : (
                    <button type="button" onClick={() => dispatch(playMusic())}>
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
