import styled from '@emotion/styled';

export const colors = {
  white: '#FFFFFF',
  black: '#000000',
  background: '#191923',
  bgNavbar: '#252535',
  border: '#32323d',
  red: '#d74b5c'
}

export const Boton = styled.button`
    background: ${colors.red};
    border-radius: 4px;
    padding: 10px 32px;
    color: ${colors.white};
    border: 2px solid transparent;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 14px;
    transition: .3s;
    cursor: pointer;
    &:hover{
        background: transparent;
        color: ${colors.red};
        border: 2px solid ${colors.red};
    }
`
