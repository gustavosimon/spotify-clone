import React from 'react';
import {
    MdPlayCircleOutline,
    MdSkipNext,
    MdSkipPrevious,
} from 'react-icons/md';

import { Container, Wrapper } from './styles';

export default function Footer() {
    return (
        <Container>
            <Wrapper>
                <button type="button" onClick={() => alert('dale')}>
                    <MdSkipPrevious size={26} color="#fff" />
                </button>
                <button type="button">
                    <MdPlayCircleOutline size={32} color="#fff" />
                </button>
                <button type="button">
                    <MdSkipNext size={26} color="#fff" />
                </button>
            </Wrapper>
        </Container>
    );
}
