import styled from 'styled-components';

export const Container = styled.input`
  width: ${props => props.width}px;
  height: 5px;
  background: #b3b3b3;
  border-radius: 5px;

  -webkit-appearance: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    max-width: 400px;
  }

  @media (max-width: 800px) {
    max-width: 200px;
  }
`;
