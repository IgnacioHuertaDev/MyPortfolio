import React from 'react';
import { WaveShape } from '../WaveShape'
import { SocialMedia } from '../SocialMedia'
import { colors } from '../../styles/GlobalStyles'
import { 
        FooterContainer, 
        InfoContainer, 
        Info, 
        Column1, 
        Column2,
        GithubLink 
} from './styles'

const Footer = () => {
    return ( 
        <>
            
            <FooterContainer>
                <WaveShape/>
                <InfoContainer>
                    <Info>
                        <Column1>
                            2020 - Build by <GithubLink href='https://github.com/IgnacioHuertaDev' target='_blanck'><strong>@IgnacioHuertaDev</strong></GithubLink>
                        </Column1>
                        <Column2>
                            <SocialMedia color={colors.white}/>
                        </Column2>
                    </Info>                                        
                </InfoContainer>
            </FooterContainer>
        </>
     );
}
 
export default Footer;