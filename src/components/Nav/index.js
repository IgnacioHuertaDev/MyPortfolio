import React from 'react'
import { Nav, NavLink } from './styles'

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