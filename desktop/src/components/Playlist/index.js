import React, { useState } from 'react';

import { MdHome, MdRadio, MdNavigation } from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';
import {
  Container,
  Ul,
  Span,
  Li,
  Home,
  HomeButton,
  RadioButton,
  NavigateButton,
  NewPlaylist,
} from './styles';

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
      <div>
        <Home>
          <HomeButton>
            <button type="button" title="Início">
              <MdHome size={30} color="#fff" />
            </button>
            <span>Início</span>
          </HomeButton>
          <NavigateButton>
            <button type="button" title="Início">
              <MdNavigation size={30} color="#fff" />
            </button>
            <span>Navegar</span>
          </NavigateButton>
          <RadioButton>
            <button type="button" title="Rádio">
              <MdRadio size={30} color="#fff" />
            </button>
            <span>Rádio</span>
          </RadioButton>
        </Home>
        <Span>Sua biblioteca</Span>
        <Ul>
          {library.map((d, i) => (
            <Li key={i} selected={selected === d}>
              <button onClick={() => setSelected(d)}>{d}</button>
            </Li>
          ))}
        </Ul>
        <Span>Playlists</Span>
        <Ul>
          {data.map((d, i) => (
            <Li key={i} selected={selected === d}>
              <button onClick={() => setSelected(d)}>{d}</button>
            </Li>
          ))}
        </Ul>
      </div>
      <NewPlaylist>
        <hr size="1" />
        <button type="button" title="Nova playlist">
          <FiPlusCircle size={30} color="#fff" />
          <span>Nova playlist</span>
        </button>
      </NewPlaylist>
    </Container>
  );
}
