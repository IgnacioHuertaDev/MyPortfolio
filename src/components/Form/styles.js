import styled from '@emotion/styled'
import { colors } from '../../styles/GlobalStyles'

export const Form = styled.form`
  width: 100%;
  && button{
    width: 100%;
    justify-content: center;
  }
`

export const ContainerInput = styled.div`
  position: relative;
  width: 100%;
`

export const Label = styled.label`
  background: ${colors.background};
  color: ${colors.white};
  font-weight: 500;
  position: absolute; 
  top: 13px;
  left: 10px;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: all 0.15s linear;
  &&.active{
    font-size: 12px;
    top: -10px;
  }
`

export const InputText = styled.input`
  font-size: 14px;
  color: ${colors.white};
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background: transparent;
  border: 1px solid ${colors.white};
  border-radius: 5px;
  padding: 10px 20px;
  transition: all ease .3s;
  &:focus{
    outline: none;
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

export const InputTextarea = styled.textarea`
  font-size: 14px;
  color: ${colors.white};
  box-sizing: border-box;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100px;
  min-height: 100px;
  max-height: 100px;
  margin-bottom: 20px;
  background: transparent;
  border: 2px solid ${colors.white};
  border-radius: 5px;
  padding: 10px 20px;
  transition: all ease .3s;
  &:focus{
    outline: none;
  }
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`

export const ContainerMessageSent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .gatsby-image-wrapper{
    width: 30%;
  }
  & h3{
    text-transform: uppercase;
    margin: 15px 0;
    font-weight: 600;
    font-size: 28px;
    text-align: center;
  }
  & p{
    line-height: 1.5em;
    font-size: 16px;
    text-align: center;
  }
  @media (max-width: 768px) {
    .gatsby-image-wrapper{
      width: 40%;
    }
  }
`
