import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const Nav = styled.nav`
    background: #ffffff;
    height: 84px;
    box-shadow: 0 5px 30px rgb(0 22 84 / 10%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    /* padding: 1rem calc((100vw - 1240px)/2); */
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;

    @media screen and (max-width:960px) {
        transition:0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-left: -140px;

    @media screen and (max-width:768px){
        margin-left: 24px;
    }
    @media screen and (max-width:1200px){
        margin-left: 24px;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    color: #010101;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #010101;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 22px;

    @media screen and (max-width:768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 90px;
    padding: 0 1rem;
`;

export const NavLinks = styled(LinkR)`
    color: #010101;
    display: flex;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
    align-items: center;
    text-decoration: none;
    font-family: 'Oswald', sans-serif;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #15b788;
        font-weight: 500;
    }

    &:hover{
        border-bottom: 3px solid #1395BA;
        transition: all 0.3s ease-in-out;
        color: #1395BA;
        font-size: 1.1rem;
    }

`;

export const NavBtn = styled.nav`
    display:flex;
    align-items: center;
    margin-right: -56px;

    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 4px;
    background: #15b788;
    white-space: nowrap;
    padding: 10px 22px;
    color: #ffffff;
    font-size: 15px;
    font-weight: 300;
    font-family: 'Oswald', sans-serif;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-left: 24px;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #1395BA;
        color: #ffffff;
    }
`;
