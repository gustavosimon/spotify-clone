import styled from 'styled-components';

export const Container = styled.div`
  height: 90px;
  background: #282828;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    color: #b3b3b3;
    padding: 10px;
    font-size: 11px;
  }

  svg {
    margin-left: 15px;
  }
`;

export const Music = styled.div`
  padding: 20px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    display: block;
    margin-bottom: 5px;
    button {
      margin-left: 10px;
    }
  }

  span + span {
    font-size: 10px;
    color: #ccc;
  }

  img {
    width: 60px;
    height: 60px;
    margin-right: 8px;
  }
`;

export const Volume = styled.div`
  padding: 30px;
  color: #fff;
  display: flex;
  align-items: center;

  button {
    opacity: 0.6;

    :hover {
      opacity: 1;
    }
  }

  svg {
    margin-left: 15px;
  }

  input {
    margin-left: 5px;
  }
`;

export const Play = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
