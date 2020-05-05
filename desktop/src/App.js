import React from 'react';
import './App.css';

import Footer from './components/Footer';
import List from './components/List';
import Playlist from './components/Playlist';

import { Container, Section } from './styles';

import AppProvider from './hooks';

function App() {
  return (
    <AppProvider>
      <Container>
        <Section>
          <Playlist />
          <List />
        </Section>
        <Footer />
      </Container>
    </AppProvider>
  );
}

export default App;
