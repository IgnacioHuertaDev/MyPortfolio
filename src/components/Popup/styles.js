import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { colors } from '../../styles/GlobalStyles'

const zoomKeyFrame = keyframes`
  from{
    transform: scale(.4);
  }
  to{
    transform: scale(1);
  }
`

export const Overlay = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`
export const ContainerPopUp = styled.div`
  width: 700px;
  height: 400px;
  background-color: ${colors.bgNavbar};
  border-radius: 5px;
  padding: 20px;
  position: relative;
  animation: .15s ${zoomKeyFrame} linear;
  @media (max-width: 1024px){
    margin: 0 16px;
  }
`

export const ButtonClose = styled.div`
  position: absolute;
  top: 0; 
  right: 0;
  width: auto;
  background: none;
  border: none;
  padding: 0;
  margin: 16px 16px 0 0;
  cursor: pointer;
  & svg path{
    fill: #fff;
  }
`
