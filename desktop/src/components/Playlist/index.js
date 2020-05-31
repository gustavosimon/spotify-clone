import React, { useState, useEffect } from 'react';

import { MdHome, MdRadio, MdNavigation } from 'react-icons/md';
import { FiPlusCircle } from 'react-icons/fi';
import api from '../../services/api';
import {
  Container,
  ListItem,
  Section,
  HomeButton,
  NewPlaylist,
  ModalAddNewPlaylist,
  CloseButton,
} from './styles';
import { useMusic } from '../../hooks/music';

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
  const [openModalNewPlaylist, setOpenModalNewPlaylist] = useState(false);
  const [newPlaylist, setNewPlaylist] = useState('');

  const { loadTracks, loadPlaylists, playlists, setPlaylists } = useMusic();

  useEffect(() => {
    loadPlaylists();
  }, [loadPlaylists]);

  function handleClickPlaylist(id) {
    setSelected(id);

    loadTracks(id);
  }

  function handleClickHome() {
    setSelected('');

    loadTracks();
  }

  async function handleNewPlaylist() {
    if (newPlaylist === '') return;

    const response = await api.post('/playlist', { name: newPlaylist });
    setPlaylists([...playlists, response.data]);
    setOpenModalNewPlaylist(false);
    setNewPlaylist('');
  }

  return (
    <Container>
      <div>
        <Section>
          <HomeButton>
            <button type="button" onClick={handleClickHome}>
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
            {library.map(d => (
              <ListItem key={d}>
                <button type="button">{d}</button>
              </ListItem>
            ))}
          </ul>
        </Section>

        <Section>
          <span>Playlists</span>
          <ul>
            {playlists.map(playlist => (
              <ListItem key={playlist._id} selected={selected === playlist._id}>
                <button
                  type="button"
                  onClick={() => handleClickPlaylist(playlist._id)}
                >
                  {playlist.name}
                </button>
              </ListItem>
            ))}
          </ul>
        </Section>
      </div>

      <NewPlaylist type="button" onClick={() => setOpenModalNewPlaylist(true)}>
        <FiPlusCircle size={30} color="#fff" />
        Nova playlist
      </NewPlaylist>

      {openModalNewPlaylist && (
        <ModalAddNewPlaylist>
          <div>
            <CloseButton onClick={() => setOpenModalNewPlaylist(false)}>
              X
            </CloseButton>
            <strong>Nova playlist</strong>
            <input
              value={newPlaylist}
              onChange={e => setNewPlaylist(e.target.value)}
              placeholder="Nome da playlist"
            />
            <button type="button" onClick={handleNewPlaylist}>
              Criar
            </button>
          </div>
        </ModalAddNewPlaylist>
      )}
    </Container>
  );
}
