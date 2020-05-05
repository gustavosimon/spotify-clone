import React from 'react';

import { MusicProvider } from './music';

function AppProvider({ children }) {
  return <MusicProvider>{children}</MusicProvider>;
}

export default AppProvider;
