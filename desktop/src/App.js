import React from 'react';
import './App.css';

import Footer from './components/Footer';
import List from './components/List';
import Playlist from './components/Playlist';

import { Provider } from 'react-redux';

import { Container, Section } from './styles';
import store from './store/index';

function App() {
    return (
        <Provider store={store}>
            <Container>
                <Section>
                    <Playlist />
                    <List />
                </Section>
                <Footer />
            </Container>
        </Provider>
    );
}

export default App;
