import React from 'react';

import { Container, Td } from './styles';

const data = [
    {
        title: 'Vem me satisfazer',
        artist: 'MC Ingryd',
        album: 'Vem me satisfazer',
        date: 'há 7 dias',
        time: '3:08',
    },
    {
        title: 'Sentadão',
        artist: 'Pedro Sampaio',
        album: 'Sentadão',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Tudo Ok',
        artist: 'Thiaguinho MT',
        album: 'Tudo Ok',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Rave de favela',
        artist: 'MC Lan',
        album: 'Rave de favela',
        date: '19/03/2020',
        time: '3:12',
    },
    {
        title: 'Vem me satisfazer',
        artist: 'MC Ingryd',
        album: 'Vem me satisfazer',
        date: 'há 7 dias',
        time: '3:08',
    },
    {
        title: 'Sentadão',
        artist: 'Pedro Sampaio',
        album: 'Sentadão',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Tudo Ok',
        artist: 'Thiaguinho MT',
        album: 'Tudo Ok',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Rave de favela',
        artist: 'MC Lan',
        album: 'Rave de favela',
        date: '19/03/2020',
        time: '3:12',
    },
    {
        title: 'Vem me satisfazer',
        artist: 'MC Ingryd',
        album: 'Vem me satisfazer',
        date: 'há 7 dias',
        time: '3:08',
    },
    {
        title: 'Sentadão',
        artist: 'Pedro Sampaio',
        album: 'Sentadão',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Tudo Ok',
        artist: 'Thiaguinho MT',
        album: 'Tudo Ok',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Rave de favela',
        artist: 'MC Lan',
        album: 'Rave de favela',
        date: '19/03/2020',
        time: '3:12',
    },
    {
        title: 'Vem me satisfazer',
        artist: 'MC Ingryd',
        album: 'Vem me satisfazer',
        date: 'há 7 dias',
        time: '3:08',
    },
    {
        title: 'Sentadão',
        artist: 'Pedro Sampaio',
        album: 'Sentadão',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Tudo Ok',
        artist: 'Thiaguinho MT',
        album: 'Tudo Ok',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Rave de favela',
        artist: 'MC Lan',
        album: 'Rave de favela',
        date: '19/03/2020',
        time: '3:12',
    },
    {
        title: 'Vem me satisfazer',
        artist: 'MC Ingryd',
        album: 'Vem me satisfazer',
        date: 'há 7 dias',
        time: '3:08',
    },
    {
        title: 'Sentadão',
        artist: 'Pedro Sampaio',
        album: 'Sentadão',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Tudo Ok',
        artist: 'Thiaguinho MT',
        album: 'Tudo Ok',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Rave de favela',
        artist: 'MC Lan',
        album: 'Rave de favela',
        date: '19/03/2020',
        time: '3:12',
    },
    {
        title: 'Vem me satisfazer',
        artist: 'MC Ingryd',
        album: 'Vem me satisfazer',
        date: 'há 7 dias',
        time: '3:08',
    },
    {
        title: 'Sentadão',
        artist: 'Pedro Sampaio',
        album: 'Sentadão',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Tudo Ok',
        artist: 'Thiaguinho MT',
        album: 'Tudo Ok',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Rave de favela',
        artist: 'MC Lan',
        album: 'Rave de favela',
        date: '19/03/2020',
        time: '3:12',
    },
    {
        title: 'Vem me satisfazer',
        artist: 'MC Ingryd',
        album: 'Vem me satisfazer',
        date: 'há 7 dias',
        time: '3:08',
    },
    {
        title: 'Sentadão',
        artist: 'Pedro Sampaio',
        album: 'Sentadão',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Tudo Ok',
        artist: 'Thiaguinho MT',
        album: 'Tudo Ok',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Rave de favela',
        artist: 'MC Lan',
        album: 'Rave de favela',
        date: '19/03/2020',
        time: '3:12',
    },
    {
        title: 'Vem me satisfazer',
        artist: 'MC Ingryd',
        album: 'Vem me satisfazer',
        date: 'há 7 dias',
        time: '3:08',
    },
    {
        title: 'Sentadão',
        artist: 'Pedro Sampaio',
        album: 'Sentadão',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Tudo Ok',
        artist: 'Thiaguinho MT',
        album: 'Tudo Ok',
        date: 'há 7 dias',
        time: '3:12',
    },
    {
        title: 'Rave de favela',
        artist: 'MC Lan',
        album: 'Rave de favela',
        date: '19/03/2020',
        time: '3:12',
    },
];

export default function List() {
    return (
        <Container>
            <table>
                <thead>
                    <Td style={{ width: '40%' }}>TITLE</Td>
                    <Td style={{ width: '15%' }}>ARTIST</Td>
                    <Td style={{ width: '15%' }}>ALBUM</Td>
                    <Td style={{ width: '15%' }}>DATA</Td>
                    <Td style={{ width: '15%' }}>TEMPO</Td>
                </thead>
                {data.map(d => (
                    <tr>
                        <Td style={{ width: '40%' }}>{d.title}</Td>
                        <Td style={{ width: '15%' }}>{d.artist}</Td>
                        <Td style={{ width: '15%' }}>{d.album}</Td>
                        <Td style={{ width: '15%' }}>{d.date}</Td>
                        <Td style={{ width: '15%' }}>{d.time}</Td>
                    </tr>
                ))}
            </table>
        </Container>
    );
}
