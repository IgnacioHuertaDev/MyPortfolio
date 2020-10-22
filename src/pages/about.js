import React from "react"
import SEO from '../components/seo'
import Home from '../components/Home'
import AboutMe from '../components/AboutMe'

const About = () => (
	<>
		<SEO title='About Me' />
		<Home boton imagen="HomeImage.png" />
		<AboutMe />
	</>
)

export default About