import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import api from '../services/api';

const MusicContext = createContext({});

function MusicProvider({ children }) {
  const [play, setPlay] = useState(false);
  const [music, setMusic] = useState({});

  const [tracks, setTracks] = useState([]);
  const [playlists, setPlaylists] = useState([]);

  const loadTracks = useCallback(async playlistId => {
    if (playlistId) {
      const { data } = await api.get(`/playlist-tracks/${playlistId}`);

      const tracks = data.map(playlistTrack => ({
        ...playlistTrack.track,
        updatedAt: playlistTrack.updatedAt,
      }));

      setTracks(tracks);
    } else {
      const { data } = await api.get('/track');

      setTracks(data);
    }
  }, []);

  const loadPlaylists = useCallback(async () => {
    const response = await api.get('/playlist');

    setPlaylists(response.data);
  }, []);

  useEffect(() => {
    loadTracks();
  }, [loadTracks]);

  return (
    <MusicContext.Provider
      value={{
        play,
        setPlay,
        music,
        setMusic,
        tracks,
        loadTracks,
        playlists,
        loadPlaylists,
        setPlaylists,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

function useMusic() {
  const context = useContext(MusicContext);

  if (!context) throw new Error('useMusic must be used within a MusicProvider');

  return context;
}

export { MusicProvider, useMusic };
