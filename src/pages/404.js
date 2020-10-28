import React from 'react'
import SEO from '../components/seo'
import { Error404 } from '../components/Error'

const Error = () => (
  <>
    <SEO title='Esta pagina no existe' />
    <Error404 />
  </>
)
export default Error