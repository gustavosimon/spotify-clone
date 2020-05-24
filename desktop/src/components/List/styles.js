import styled, { css } from 'styled-components';

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
  }
`;

export const Tr = styled.tr`
  ${props =>
    props.active &&
    css`
      font-weight: bold;
      color: rgba(30, 215, 96);
      background: rgba(40, 40, 40);

      td {
        button {
          visibility: visible;
        }
      }
    `}

  :hover {
    color: rgba(30, 215, 96);
    background: rgba(40, 40, 40);
    td {
      button {
        visibility: visible;
      }
    }
  }
`;

export const Td = styled.td`
  border-bottom: 1px solid rgba(204, 204, 204, 0.2);
  padding: 10px;
`;

export const Play = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  visibility: hidden;
`;
