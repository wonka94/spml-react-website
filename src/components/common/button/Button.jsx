import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Button = styled(Link)`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#15b788' : '#1395BA')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px ' : '10px 22px')};
    color: ${({dark}) => (dark ? '#010606': '#ffffff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '15px')};
    outline: none;
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    /* letter-spacing: 1.5px; */
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    /* margin-top: 15px; */
    width: 180px;
    height: 60px;
    margin: 20px;
    line-height: 60px;
    letter-spacing: 2px;
    text-decoration: none;
    text-align: center;
    position: relative;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#1395BA' : '#15b788')};
        color: ${({dark}) => (dark ? '#010606': '#ffffff')};
    }
`;

