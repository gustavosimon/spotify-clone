import React from 'react';
import {
    MdPlayCircleOutline,
    MdSkipNext,
    MdSkipPrevious,
} from 'react-icons/md';

import disc from '../../assets/disc.png';

import { Container, Wrapper, Music } from './styles';

export default function Footer() {
    return (
        <Container>
            <Music>
                <img src={disc} alt="Imagem de disco" />
                <div>
                    <span>Sentadão</span>
                    <span>Pedro Sampaio</span>
                </div>
            </Music>
            <Wrapper>
                <button type="button">
                    <MdSkipPrevious size={26} color="#fff" />
                </button>
                <button type="button">
                    <MdPlayCircleOutline size={32} color="#fff" />
                </button>
                <button type="button">
                    <MdSkipNext size={26} color="#fff" />
                </button>
            </Wrapper>
            <div>final</div>
        </Container>
    );
}
