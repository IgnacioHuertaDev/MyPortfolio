import React from 'react'
import { Link } from 'gatsby'
import style from '@emotion/styled';
import styled from '@emotion/styled';
import { colors } from '../styles/GlobalStyles'

const Nav = style.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3 rem;
    @media (min-width: 768px) {
        paddin-bottom: 0; 
    }
`;

const NavLink = styled(Link)`
    color: ${colors.white};
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;
    text-transform: uppercase;
    transition: .3s;

    @media (max-width: 768px) {
        font-size: 1.3rem;            
    }

    @media (max-width: 360px) {
        font-size: 0.95rem;            
    }

    &:last-of-type {
        margin-right: 0;
    }

    &.actual-page {
        border-bottom: 2px solid #D74b5C;
        color: #D74b5C;
    }

    &:hover {
    color: ${colors.red};
  }
`;

const Navbar = () => {
    return ( 
        <Nav>
            <NavLink to={'/'} activeClassName="actual-page">Home</NavLink>
            <NavLink to={'/projects'} activeClassName="actual-page">Projects</NavLink>
            <NavLink to={'/about'} activeClassName="actual-page">About me</NavLink>
            <NavLink to={'/contact'} activeClassName="actual-page">Contact</NavLink>
        </Nav>
     );
}
 
export default Navbar;