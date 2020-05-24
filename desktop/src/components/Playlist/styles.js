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
