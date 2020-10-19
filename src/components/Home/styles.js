import styled from '@emotion/styled'
import { colors } from '../../styles/GlobalStyles'

export const HomeContainer = styled.section`
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
export const Column1 = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  
  & .homeImage {
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
  @media (max-width: 1025px) {
    width: 100%;
    padding: 0;
  }
`
export const HomeTop = styled.div`
  display: flex;
  @media (max-width: 1025px) {
    margin: 0 4% 0 4%;
  }
`
export const HomeCol1 = styled.div`
  width: 80%;

  & h1 {
    margin: 5% auto 2% auto;
    font-size: 3rem;
  }
  & h3{
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    color: ${colors.rojo};
    position: relative;
  }
  & h3::after{
    position: absolute;
    content: "";
    width: 50px;
    height: 3px;
    background: #d74b5c;
    left: 80px;
    top: 8px;
  }
  & h2{
    text-transform: uppercase;
    margin: 15px 0;
    font-weight: 600;
    font-size: 32px;
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
export const HomeCol2 = styled.div`
  width: 20%;
`
export const HomeBottom = styled.div`
  display: flex;
  @media (max-width: 1025px) {
    margin: 0 4% 0 4%;
  }
`
export const HomeCol3 = styled.div`
  width: 100%;
  & p{
    line-height: 1.5em;
    font-size: 15px;
    margin-bottom: 15px;
  }
  
  & nav {
    padding-top: 4%;
  }
`
export const HomeTitle = styled.h1`
	color: ${colors.red};
  font-family: 'Raleway', sans-serif;
  font-size: 6rem !important;
  text-transform: uppercase;

	span {
		font-family: 'Source Code Pro', monospace;
		font-size: 3rem;
    color: ${colors.white};
  }
  
  @media (max-width: 768px) {
    font-size: 4rem !important;

    span{
      font-size: 2.5rem;
    }
  }
`