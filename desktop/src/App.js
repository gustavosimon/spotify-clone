import React, { useEffect } from 'react';
import './App.css';

import Footer from './components/Footer';
import List from './components/List';
import Playlist from './components/Playlist';

import { Container, Section } from './styles';

function App() {
    // useEffect(() => {
    //     async function dale() {
    //     dale();
    // }, []);
    return (
        <Container>
            <Section>
                <Playlist />
                <List />
            </Section>
            <Footer />
        </Container>
    );
}

export default App;
