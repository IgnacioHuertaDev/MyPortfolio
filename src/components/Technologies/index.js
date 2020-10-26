import React from 'react'
import { ContainerTechnologies } from './styles'
import { Html5, Css3, Javascript, IconReact, Gatsby} from '../../icons/technologies'
import IconNetCore from '../../icons/technologies/NetCore'
import IconSqlServer from '../../icons/technologies/SqlServer'
import IconPhp from '../../icons/technologies/Php'

export const Technologies = ({ technologies, title }) => {
  return (
    <ContainerTechnologies>
      {title &&
        <h2>{title}</h2>}
      <ul>
        {technologies.map((icon, id) =>
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
            {icon === 'Net Core' &&
              <div>
                <IconNetCore />
                <p>.Net Core</p>
              </div>}
            {icon === 'Sql Server' &&
              <div>
                <IconSqlServer />
                <p>SQL Server</p>
              </div>}
            {icon === 'Php' &&
              <div>
                <IconPhp />
                <p>PHP</p>
              </div>}
          </li>
        )}
      </ul>
    </ContainerTechnologies>
  )
}
