import React from 'react'
import Instagram from '../../icons/IconInstagram'
import Linkedin from '../../icons/IconLinkedin'
import Github from '../../icons/IconGithub'
import { SocialMediaContainer } from './styles'

export const SocialMedia = ({color}) => {
  return (
    <SocialMediaContainer>
      <li>
        <a href='https://github.com/IgnacioHuertaDev' target='_blanck'>
          <Github color={color}/>
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/ignacio-huerta-a53829148/' target='_blanck'>
          <Linkedin color={color}/>
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com/nachohuerta__/' target='_blanck'>
          <Instagram color={color}/>
        </a>
      </li>
    </SocialMediaContainer>
  )
}
