import React from 'react'
import Image from '../image'
import { ContainerError } from './styles'
import { Boton } from '../../styles/GlobalStyles'
import { Link } from 'gatsby'

export const Error404 = () => {
  return (
    <ContainerError>
      <Image name='Error.png' />
      <h1>An error has occurred</h1>
      <Link to='/'>
        <Boton>Back to home</Boton>
      </Link>
    </ContainerError>
  )
}
