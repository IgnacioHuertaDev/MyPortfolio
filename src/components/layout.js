import React from "react"
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
import Header from './header'
import { colors } from '../styles/GlobalStyles'
import Footer from './Footer'

const Layout = (props) => {

  return (
    <>
        <Global
            styles={css`
            

                html {
                    font-size: 62.5%;
                    height: 100%;
                }
                body {                
                    height: 100%;
                    background-color: ${colors.background};
                    font-size: 18px;
                    font-size: 1.8rem;
                    line-height: 1.5;
                    font-family: 'Montserrat', sans-serif;
                    color: ${colors.white};
                }

                #___gatsby {
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                h1, h2, h3 {
                    margin: 0;
                    line-height: 1.5;
                }
                h1, h2 {
                    font-family: 'Montserrat', sans-serif;
                }
                h3 {
                    font-family: 'Montserrat', sans-serif;
                }
                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                header{
                    flex: 0 0 auto;
                }

                .main-content{
                    flex: 1 0 auto;
                }

                footer{
                    flex: 0 0 auto;
                }

                /* Estilos track de scroll */
                ::-webkit-scrollbar {
                    width: 8px;
                }

                /* Track */
                ::-webkit-scrollbar-track { 
                    border-radius: 4px;
                }
                
                /* Handle */
                ::-webkit-scrollbar-thumb {
                    background: ${colors.red};
                    border-radius: 10px;
                }

                /* Handle on hover */
                ::-webkit-scrollbar-thumb:hover {
                    background: #de354a; 
                }
            `}
        />
        <Helmet>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
            <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
            <link href='https://fonts.googleapis.com/css2?family=Montserrat&display=swap' rel='stylesheet'/>
            <link href="https://fonts.googleapis.com/css?family=Raleway:400,900|Roboto:300,400,700&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;1,100;1,300&display=swap" rel="stylesheet"></link>
            <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap" rel="stylesheet" />
        </Helmet>
        <Header />
        <div className="main-content">
            {props.children}
        </div>
        <Footer/>
    </>
    
  )
}

export default Layout
