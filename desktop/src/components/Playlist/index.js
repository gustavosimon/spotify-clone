import React, { useState } from 'react';

import { MdHome, MdRadio, MdNavigation } from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';
import {
  Container,
  ListItem,
  Section,
  HomeButton,
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
        <Section>
          <HomeButton>
            <button type="button">
              <MdHome size={24} color="#fff" />
            </button>
            <span>Início</span>
          </HomeButton>

          <HomeButton>
            <button type="button">
              <MdNavigation size={24} color="#fff" />
            </button>
            <span>Navegar</span>
          </HomeButton>

          <HomeButton>
            <button type="button">
              <MdRadio size={24} color="#fff" />
            </button>
            <span>Rádio</span>
          </HomeButton>
        </Section>

        <Section>
          <span>Sua biblioteca</span>
          <ul>
            {library.map((d, i) => (
              <ListItem key={i} selected={selected === d}>
                <button onClick={() => setSelected(d)}>{d}</button>
              </ListItem>
            ))}
          </ul>
        </Section>

        <Section>
          <span>Playlists</span>
          <ul>
            {data.map((d, i) => (
              <ListItem key={i} selected={selected === d}>
                <button onClick={() => setSelected(d)}>{d}</button>
              </ListItem>
            ))}
          </ul>
        </Section>
      </div>

      <NewPlaylist type="button">
        <FiPlusCircle size={30} color="#fff" />
        Nova playlist
      </NewPlaylist>
    </Container>
  );
}
