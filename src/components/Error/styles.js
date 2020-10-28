import styled from '@emotion/styled'

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & .gatsby-image-wrapper{
    width: 30%;
    margin-bottom: 30px;
  }
  & h1{
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

`

export const ImageColumn = styled.div`
  width: 40%;
  display: flex;
  align-items: center;

  & .gatsby-image-wrapper{
    width: 80%;
    margin: 30px auto 30px auto;
  }

  @media (max-width: 1025px) {
    width: 100%;
    justify-content: center;
  }
`
