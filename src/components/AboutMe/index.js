import React from 'react'
import { Link } from 'gatsby'
import { DescriptionContainer, ColExt, ColCen, ImageContainer, AboutMeContainer, AboutMeTitle, Column1, Column2, AboutTop, AboutBottom, AboutCol1, AboutCol2, AboutInterest } from './styles'
import Image from '../image'
import { Boton } from '../../styles/GlobalStyles'
import Instagram from '../../icons/IconInstagram'
import Linkedin from '../../icons/IconLinkedin'
import Github from '../../icons/IconGithub'
import { Technologies } from '../Technologies'
import { colors } from '../../styles/GlobalStyles'

const AboutMe = ({image}) => {
  return (
    <>
        <AboutMeContainer>
            <Column1>
                <Image className="aboutImage" name={image} />
            </Column1>
            <Column2>
                <AboutTop>
                    <AboutCol1>
                        <AboutMeTitle>&#60;About Me&#62;</AboutMeTitle>
                    </AboutCol1>
                </AboutTop>
                <AboutBottom>
                    <AboutCol2>
                        <p >
                            I'm a web developer, i have experience working with .NET and React, currently i'm living in Argentina and studing in UTN . Actually i'm dedicated to web development and some mobile applications.
                        </p>
                    </AboutCol2>
                </AboutBottom>
            </Column2>
        </AboutMeContainer>

        <DescriptionContainer>
            
                <ColExt>
                    <AboutInterest>
                    <h3>Interests</h3>
                    <p>I am passionate about technology, focused on developing applications especially with JS and its React library. I am always looking for professional challenges, I like to gain experience in large-scale projects and possibilities for a lot of growth.</p>
                    <p>Day by day I dedicate time to learn different knowledge and technologies that help me to continue advancing and improving my professional growth</p>
                    </AboutInterest>
                </ColExt>

                <ColExt>
                    <AboutInterest>
                        <h3>Technologies</h3>
                        <Technologies technologies={['Html5', 'Css3', 'Javascript', 'React', 'Gatsby', 'React Native', 'Net Core', 'Sql Server', 'Php']} />
                    </AboutInterest>
                </ColExt>

                <ColCen>
                    <AboutInterest>
                    <ImageContainer>
                        <Image name='ProfilePicture.jpg' />
                        <section>
                            <div>
                                <nav>
                                    <li>
                                        <a href='https://github.com/IgnacioHuertaDev' target='_blanck'>
                                        <Github color={colors.red}/>
                                        </a>
                                    </li>
                                        <li>
                                        <a href='https://www.linkedin.com/in/ignacio-huerta-a53829148/' target='_blanck'>
                                        <Linkedin color={colors.red}/>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='https://www.instagram.com/nachohuerta__/' target='_blanck'>
                                        <Instagram color={colors.red}/>
                                        </a>
                                    </li>
                                </nav>
                            </div>
                        </section>
                    </ImageContainer>
                    <Link to='/contact'>
                        <Boton>Contact me!</Boton>
                    </Link>
                    </AboutInterest>
                </ColCen>

        </DescriptionContainer>
    </>
  )
}

export default AboutMe
