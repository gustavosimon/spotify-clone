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
`;

export const Music = styled.div`
  span {
    display: block;
    margin-bottom: 5px;
  }
  padding: 20px;
  color: #fff;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  span + span {
    font-size: 10px;
    color: #ccc;
  }
  img {
    width: 50px;
    height: 50px;
    margin-right: 8px;
  }
`;
