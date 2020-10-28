import styled from '@emotion/styled'
import { colors } from '../../styles/GlobalStyles'

export const AboutMeContainer = styled.section`
  display: flex;
  max-width: 1180px;
  margin: 2% auto;
  & .gatsby-image-wrapper{
    width: 100%;
    border-radius: 4px;
  }
  @media (max-width: 1025px) {
    flex-direction: column;
    & .gatsby-image-wrapper{
      width: 80%;
    }
  }
  @media (max-width: 768px) {
    & .gatsby-image-wrapper{
      width: 80%;
    }
  }
`

export const AboutMeTitle = styled.h1`
	color: ${colors.red};
  font-family: 'Raleway', sans-serif;
  font-size: 6rem !important;
  text-transform: uppercase;
  margin-bottom: 2%;
  
  @media (max-width: 768px) {
    font-size: 4rem !important;
  }
`

export const Column1 = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  & .aboutImage {
    width: 200px;
  }

  @media (max-width: 1025px) {
    width: 100%;
    justify-content: center;
  }
`
export const Column2 = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;

  & p{
    line-height: 1.5em;
    font-size: 16px;
  }

  @media (max-width: 1025px) {
    width: 100%;
    padding: 0;
  }
`

export const AboutTop = styled.div`
  display: flex;
  @media (max-width: 1025px) {
    margin: 0 4% 0 4%;
  }
`
export const AboutCol1 = styled.div`
  width: 80%;

  & h1 {
    margin: 5% auto 2% auto;
    font-size: 3rem;
  }

  @media (max-width: 1025px) {
    & h3{
      margin-top: 10px;
    }
  }

  @media (max-width: 768px) {
    & h1{
      font-size: 2.5rem;
    }
  }
`
export const AboutBottom = styled.div`
  display: flex;
  @media (max-width: 1025px) {
    margin: 0 4% 0 4%;
  }
`
export const AboutCol2 = styled.div`
  width: 100%;
  & p{
    line-height: 1.5em;
    font-size: 15px;
    margin-bottom: 15px;
  }
`

export const AboutInterest = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        margin: 0 4% 0 4%;
    }
`

export const DescriptionContainer = styled.section`
  display: flex;
  margin: 2% auto;
  max-width: 1180px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    & .gatsby-image-wrapper{
      width: 80%;
    }
  }
`

export const ColExt = styled.div`
  width: 40%;
  padding: 0 20px;
  & h3{
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  & p{
    line-height: 1.5em;
    font-size: 16px;
    margin-bottom: 15px;
  }
  & ul li{
    margin-bottom: 20px;
  }
  @media (max-width: 1200px) {
    width: 35%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`
export const ColCen = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  flex-direction: column;
  & .gatsby-image-wrapper{
    width: 100%;
    height: 100%;
    border-radius: 4px;
    margin-bottom: 20px;
  }
  & a{
    width: 80%;
  }
  && button{
    width: 100%;
  }
  @media (max-width: 1200px) {
    width: 30%;
  }
  @media (max-width: 768px) {
    width: 100%;
    & a{
      width: 100%;
    }
  }
`

export const ImageContainer = styled.div`
  position: relative;
  height: 80%;
  width: 80%;
  margin-bottom: 20px;
  cursor: pointer;
  color: #ffffff;
  & section{
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .3s;
    background: rgba(0,0,0,.5);
  }
  &:hover section{
    opacity: 1;
  }
  & section div{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: auto; 
  }
  & section div nav{
    background-color: #191922;
    border-radius: 4px;
    padding: 6px;
    margin: 8px;
    display: flex;
  }
  & section div nav li {
    list-style: none;
  }
  & section svg{
    width: 22px;
    height: 22px;
    margin: 2px 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin-bottom: 0px;
  }
`
