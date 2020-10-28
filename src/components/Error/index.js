import React from 'react'
import Image from '../image'
import { ContainerError, ImageColumn } from './styles'
import { Boton } from '../../styles/GlobalStyles'
import { Link } from 'gatsby'

export const Error404 = () => {
  return (
    <ContainerError>
        <ImageColumn>
            <Image name='Error.png' />
        </ImageColumn>

        <h1>An error has occurred</h1>
        <Link to='/'>
            <Boton>Back to home</Boton>
        </Link>
    </ContainerError>
  )
}
