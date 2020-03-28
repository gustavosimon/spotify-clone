import styled from 'styled-components';

export const Container = styled.div`
    background: rgba(24, 24, 24);
    color: #fff;
    height: 100%;
    width: 100%;
    padding: 30px;
    overflow-y: scroll;

    table {
        border-spacing: 0;
        border-collapse: collapse;
        width: 100%;

        thead {
            color: #ccc;
            margin: 15px;
            font-size: 11px;
            letter-spacing: 2px;
        }
    }

    ::-webkit-scrollbar {
        width: 12.5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 40px;
    }

    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 40px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
        display: visible;
    }
`;

export const Td = styled.td`
    border-bottom: 1px solid rgba(204, 204, 204, 0.2);
    padding: 10px;
`;
