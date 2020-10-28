import styled from '@emotion/styled'
import { colors } from '../../styles/GlobalStyles'

export const FooterContainer = styled.footer`
    
`
export const InfoContainer = styled.div`
    width: 100%;
    padding: 30px 0;
    overflow: hidden;
    background-color: ${colors.red};
`

export const Info = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10%;
    margin: 0 2%;
`

export const Column1 = styled.div`
    grid-column: 1 / 3;
    grid-row: 1;

    & .attribute {
        text-decoration: none;
        color: ${colors.white};
    }

    @media (max-width: 765px) {
        font-size: 1.5rem;
    }

    @media (max-width: 435px) {
        font-size: 1rem;
    }

`

export const Column2 = styled.div`
    grid-column: 3 / 3;
    grid-row: 1;  
    justify-self: center;
`
export const GithubLink = styled.a`
    text-decoration: none;
    color: ${colors.white};
`