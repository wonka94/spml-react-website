import React from 'react';
import './Header.css';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './HeaderElements';
import { FaBars } from 'react-icons/fa';

const Header = ({ toggle }) => {

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src={require('../../images/logo3.png')} alt="logo" width="250" height="150" />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars size={20} style={{ color: '#000' }} />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/about" >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="/contact">Contact</NavLinks>
                        </NavItem>
                    </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/contact" >Enquiries</NavBtnLink>
                        </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Header