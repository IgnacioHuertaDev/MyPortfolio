import React from 'react';
import { css } from '@emotion/core'
import Navbar from './Nav'
import Logo from '../components/Logo/logo'
import { colors } from '../styles/GlobalStyles' 

const Header = () => {
    return ( 
        <header
            css={css`                
                background-color: ${colors.bgNavbar};
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                <Logo />
                <Navbar />
            </div>
        </header>
     );
}
 
export default Header;