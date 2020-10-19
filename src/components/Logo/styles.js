import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const LogoLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & .gatsby-image-wrapper{
        width: 35px;
        margin-right:10px;
        object-fit: cover;
        border-radius: 5px; 
    }

    @media (max-width: 768px) {
        font-size: 1.4rem;            
    }

    @media (max-width: 360px) {
        font-size: 0.90rem;            
    }
`

export const ColumnImage = styled.div`
`

export const ColumnText = styled.div`
`