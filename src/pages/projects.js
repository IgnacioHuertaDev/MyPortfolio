import React from "react"
import SEO from '../components/seo'
//Eliminar luego
import Image from '../components/image'
import styled from '@emotion/styled'

const ProjectContainer = styled.div`
	margin: 0 auto;
	width: 30%;
`

const Projects = () => (
	<>
		<SEO title='Projects' />
		<ProjectContainer>
			<Image className="homeImage" name="UnderConstructionImage.png" />
		</ProjectContainer>
	</>
)

export default Projects