import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  background: rgba(18, 18, 18);
  color: #fff;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 0;
`;

export const ListItem = styled.li`
  opacity: 0.7;
  color: #fff;
  margin-bottom: 10px;
  line-height: 20px;

  &:hover {
    opacity: 1;
  }

  ${props =>
    props.selected &&
    css`
      border-left: 2px solid rgba(30, 215, 96);
      padding-left: 8px;
      opacity: 1;
    `}

  button {
    color: #fff;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const Section = styled.div`
  padding: 10px;
  margin-top: 14px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 5px;

  > span {
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 2px;
    opacity: 0.7;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;

export const HomeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  opacity: 0.7;

  &:hover {
    opacity: 1;
  }

  span {
    margin-left: 15px;
    color: #fff;
  }
`;

export const NewPlaylist = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 10px 10px 0px 10px;
  color: #fff;

  opacity: 0.7;
  border-top: 1px solid #fff;

  &:hover {
    opacity: 1;
  }

  svg {
    margin-right: 10px;
  }
`;

export const ModalAddNewPlaylist = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);

  div {
    position: relative;
    background: #282828;
    padding: 20px;
    box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.4);

    display: flex;
    flex-direction: column;

    strong {
      text-align: center;
      margin-bottom: 10px;
    }

    input {
      background: #fff;
      padding: 5px;
      margin-bottom: 10px;
    }

    input + button {
      font-weight: bold;
      line-height: 24px;
      color: #fff;
      background: rgba(30, 215, 96);
      padding: 5px;
      border-radius: 20px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  color: #fff;
`;
