import React from 'react'
import { Link } from 'gatsby'
import { DescriptionContainer, ColExt, ColCen, ImageContainer } from './styles'
import Image from '../image'
import { Boton } from '../../styles/GlobalStyles'
import Instagram from '../../icons/IconInstagram'
import Linkedin from '../../icons/IconLinkedin'
import Github from '../../icons/IconGithub'
import { Technologies } from '../Technologies'

const AboutMe = () => {
  return (
    <DescriptionContainer>

      <ColExt>
        <h3>Interests</h3>
        <p>Soy un apasionado de la tecnología, enfocado en el desarrollo de aplicaciones especialmente con Javacript y su librería React . Siempre estoy en busca de retos profesionales, me gusta adquirir experiencia en proyectos a gran escala y posibilidades de mucho crecimiento.</p>
        <p>Soy una persona autodidacta, día a día dedico tiempo para aprender en diferentes plataformas digitales como Platzi, Udemy, Youtube, documentación… en fin, cualquier plataforma que me pueda aportar conocimiento para crecer profesionalmente</p>
      </ColExt>

      <ColExt>
        <h3>Tecnologías</h3>
        <Technologies technologys={['Html5', 'Css3', 'Javascript', 'React', 'Gatsby', 'React Native']} />
      </ColExt>

      <ColCen>
        <ImageContainer>
          <Image name='' />
          <section>
            <div>
              <nav>
                <li>
                  <a href='https://github.com/simontorresdev' target='_blanck'>
                    <Github />
                  </a>
                </li>
                <li>
                  <a href='https://www.linkedin.com/in/simontorresdev/' target='_blanck'>
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/simontorresdev/' target='_blanck'>
                    <Instagram />
                  </a>
                </li>
              </nav>
            </div>
          </section>
        </ImageContainer>
        <Link to='/contact'>
          <Boton>Contact me!</Boton>
        </Link>
      </ColCen>

    </DescriptionContainer>
  )
}

export default AboutMe
