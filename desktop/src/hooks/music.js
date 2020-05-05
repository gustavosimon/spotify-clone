import React, { createContext, useContext, useState } from 'react';

const MusicContext = createContext({});

function MusicProvider({ children }) {
  const [play, setPlay] = useState(false);
  const [music, setMusic] = useState({});

  return (
    <MusicContext.Provider value={{ play, setPlay, music, setMusic }}>
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
