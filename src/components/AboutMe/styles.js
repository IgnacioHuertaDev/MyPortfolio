import styled from '@emotion/styled'

export const DescriptionContainer = styled.div`
  display: flex;
  margin-top: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
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
    font-size: 15px;
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
