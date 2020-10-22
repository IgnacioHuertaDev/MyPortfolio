import React from 'react'
import Image from '../image'
import { FormBox } from '../Form'
import { ContactContainer, Column1, Column2, Info, IconBox, SocialMediaBox } from './styles'
import { SocialMedia } from '../SocialMedia'
import { colors } from '../../styles/GlobalStyles'

const ContactForm = () => {
  return (
    <ContactContainer>

      <Column1>

        <Image name='EmailImage.png' />

        <Info>
          <IconBox href='mailto:98nachohuerta@gmail.com'>
            <div>
              <Image name='correo.png' />
            </div>
            <div>
              <h3>Mail To:</h3>
              <h2>98nachohuerta<span className='antiSpam'>antispan684654</span><code>&#64;</code><span className='antiSpam'>antispan446</span>gmail.com</h2>
            </div>
          </IconBox>
        </Info>

        <SocialMediaBox>
          <SocialMedia color={colors.red}/>
        </SocialMediaBox>

      </Column1>

      <Column2>
        <h1>Contact</h1>
        <h2>Let's talk!</h2>
        <FormBox />
      </Column2>

    </ContactContainer>
  )
}

export default ContactForm