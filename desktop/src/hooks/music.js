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

  const loadTracks = useCallback(async () => {
    const response = await api.get('/track');

    setTracks(response.data);
  }, []);

  useEffect(() => {
    loadTracks();
  }, [loadTracks]);

  return (
    <MusicContext.Provider
      value={{ play, setPlay, music, setMusic, tracks, loadTracks }}
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
