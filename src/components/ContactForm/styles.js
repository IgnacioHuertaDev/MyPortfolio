import styled from '@emotion/styled'
import { colors } from '../../styles/GlobalStyles'

export const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  width: 90%;
  margin: 1% auto;
  @media (max-width: 1025px) {
    flex-direction: column-reverse;
  }
`

export const Column1 = styled.div`
  width: 50%;
  
  & .gatsby-image-wrapper{
    width: 65%;
  }
  @media (max-width: 1025px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    margin-top: 30px;
    & .gatsby-image-wrapper{
      width: 90%;
      margin: 0 auto;
    }
  }
`

export const Column2 = styled.div`
  width: 50%;
  & h1{
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.rojo};
    position: relative;
  }
  & h1::after{
    position: absolute;
    content: "";
    width: 50px;
    height: 3px;
    background: #d74b5c;
    left: 90px;
    top: 8px;
  }
  & h2{
    text-transform: uppercase;
    margin: 15px 0;
    font-weight: 600;
    font-size: 32px;
  }
  @media (max-width: 1025px) {
    width: 100%;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1025px) {
    margin-bottom: 20px;
  }
`

export const IconBox = styled.a`
  display: flex;
  margin-top: 20px;
  text-decoration: none;
  & h3{
    font-size: 18px;
    margin-left: 15px;
    color: #fff;
    text-decoration: none;
  }
  & h2{
    margin-top: 8px;
    font-size: 16px;
    margin-left: 15px;
    color: #fff;
    text-decoration: none;
  }
  && .gatsby-image-wrapper{
    width: 35px;
  }
  & .antiSpam{
    display: none;
  }
`
export const SocialMediaBox = styled.div`
  display: none;
  @media (max-width: 1025px) {
    display: block;
  }
`
