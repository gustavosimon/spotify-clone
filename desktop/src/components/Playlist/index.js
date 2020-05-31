import React, { useState, useEffect } from 'react';

import { MdHome, MdRadio, MdNavigation } from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';
import {
  Container,
  ListItem,
  Section,
  HomeButton,
  NewPlaylist,
} from './styles';
import api from '../../services/api';
import { useMusic } from '../../hooks/music';

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
  const [playlists, setPlaylists] = useState([]);

  const { loadTracks } = useMusic();

  useEffect(() => {
    async function loadPlaylists() {
      const response = await api.get('/playlist');

      setPlaylists(response.data);
    }

    loadPlaylists();
  }, []);

  return (
    <Container>
      <div>
        <Section>
          <HomeButton>
            <button type="button" onClick={loadTracks}>
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
            {playlists.map(playlist => (
              <ListItem
                key={playlist._id}
                selected={selected._id === playlist._id}
              >
                <button type="button" onClick={() => setSelected(playlist)}>
                  {playlist.name}
                </button>
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
