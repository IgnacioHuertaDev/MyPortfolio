import React from 'react'
import Image from '../image'
import { css } from '@emotion/core'
import { LogoLink, LogoContainer, ColumnImage, ColumnText } from './styles'
import { colors } from '../../styles/GlobalStyles' 

const Logo = () => {
  return (
    <LogoLink to='/'>
      <LogoContainer>
        <ColumnImage>
          <Image name='logoRounded.png' />
        </ColumnImage>

        <ColumnText>
            <h1
                css={css`
                    color: ${colors.white};;
                    text-align: center;
                    font-family: 'Raleway', sans-serif;
                `}
                >
                IH
                <span
                    css={css`
                        color: ${colors.white};;
                        text-align: center;
                        font-family: 'Roboto', sans-serif;
                        font-style: italic;
                        font-weight: 300;
                    `}
                >
                    Dev
                </span>
            </h1>
        </ColumnText>
      </LogoContainer>
    </LogoLink>
  )
}

export default Logo