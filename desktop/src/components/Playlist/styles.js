import styled, { css } from 'styled-components';
export const Container = styled.div`
    width: 200px;
    height: 100%;
    background: rgba(18, 18, 18);
    color: #fff;
`;

export const Ul = styled.ul`
    color: #fff;
`;

export const Span = styled.span`
    text-transform: uppercase;
    display: block;
    font-size: 10px;
    letter-spacing: 2px;
    opacity: 0.6;
    padding: 10px;
`;

export const Li = styled.li`
    padding-left: 10px;
    opacity: 0.5;
    color: #fff;
    margin-bottom: 10px;
    line-height: 20px;
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
