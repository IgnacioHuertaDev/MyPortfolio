import React from 'react'
import Image from '../image'
import { Boton, colors } from '../../styles/GlobalStyles'
import { Link } from 'gatsby'
import {
  HomeContainer,
  Column1,
  Column2,
  HomeTop,
  HomeCol1,
  HomeCol2,
  HomeBottom,
  HomeCol3,
  HomeTitle
} from './styles'
import { SocialMedia } from '../SocialMedia'


const Home = ({ boton, imagen }) => {
    return ( 
      <>
        <HomeContainer>
          <Column1>
            <Image className="homeImage" name={imagen} />
          </Column1>
          <Column2>
            <HomeTop>
              <HomeCol1>
                <HomeTitle>&#60;Hello World&#62;<span>&nbsp;<br/>I'm Ignacio Huerta</span></HomeTitle>
                <h1>Full Stack Developer</h1>
              </HomeCol1>
              <HomeCol2 />
            </HomeTop>
            <HomeBottom>
              <HomeCol3>
                <p>
                  I'm a web developer, i have experience working with .NET and React, currently i'm living in Argentina. Actually i'm dedicated to web development and some mobile applications.
                </p>
                {boton &&
                  <Link to='/about'>
                    <Boton>See more</Boton>
                  </Link>}
                  <SocialMedia className="socialmedia-home" color={colors.red}/>
              </HomeCol3>
            </HomeBottom>
          </Column2>
        </HomeContainer>
      </>
     );
}

export default Home;