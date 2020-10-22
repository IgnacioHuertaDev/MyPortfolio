import React from 'react'
import { ContainerTechnologies } from './styles'
import { Html5, Css3, Javascript, IconReact, Gatsby} from '../../icons/technologies'

export const Technologies = ({ technologys, title }) => {
  return (
    <ContainerTechnologies>
      {title &&
        <h2>{title}</h2>}
      <ul>
        {technologys.map((icon, id) =>
          <li key={id}>
            {icon === 'Html5' &&
              <div>
                <Html5 />
                <p>HTML</p>
              </div>}
            {icon === 'Css3' &&
              <div>
                <Css3 />
                <p>CSS</p>
              </div>}
            {icon === 'Javascript' &&
              <div>
                <Javascript />
                <p>Javascript</p>
              </div>}
            {icon === 'React' &&
              <div>
                <IconReact />
                <p>React</p>
              </div>}
            {icon === 'Gatsby' &&
              <div>
                <Gatsby />
                <p>Gatsby</p>
              </div>}
            {icon === 'React Native' &&
              <div>
                <IconReact />
                <p>React Native</p>
              </div>}
          </li>
        )}
      </ul>
    </ContainerTechnologies>
  )
}
