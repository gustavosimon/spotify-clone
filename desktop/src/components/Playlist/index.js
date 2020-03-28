import React, { useState } from 'react';

import { Container, Ul, Span, Li } from './styles';

const data = [
    'Funk Hits',
    'Eletronicas 2020',
    'Bomba Patch',
    'Rock 80-90 internacional',
];

const library = [
    'Feito para você',
    'Tocadas recentemente',
    'Músicas Curtidas',
    'Álbuns',
    'Artistas',
    'Podcasts',
];

export default function Playlist() {
    const [selected, setSelected] = useState('');
    return (
        <Container>
            <Span>Sua biblioteca</Span>
            <Ul>
                {library.map(d => (
                    <Li selected={selected === d}>
                        <button onClick={() => setSelected(d)}>{d}</button>
                    </Li>
                ))}
            </Ul>
            <Span>Playlists</Span>
            <Ul>
                {data.map(d => (
                    <Li selected={selected === d}>
                        <button onClick={() => setSelected(d)}>{d}</button>
                    </Li>
                ))}
            </Ul>
        </Container>
    );
}
