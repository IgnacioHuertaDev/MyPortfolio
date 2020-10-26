import styled from '@emotion/styled'

export const ContainerTechnologies = styled.div`
  margin: 30px 0;
  & h2{
    text-transform: uppercase;
    margin: 15px 0 20px 0;
    font-weight: 600;
    font-size: 22px;
  }
  & ul{
    display: flex;
    flex-wrap: wrap;
  }
  & ul li{
    list-style: none;
  }
  & li svg{
    width: 50px;
    height: 32px;
    margin: 0px 20px;
  }
  
  & li svg.github path{
    fill: #fff;
  }

  & li svg.html path:nth-of-type(4),
  & li svg.css path:nth-of-type(4){
    fill: #fff;
  } 
  & li div p{
    margin: 0;
    margin-top: 0px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    margin-top: 5px;
  }

  & .netCore {
        opacity: 0.1;
    }

  & .php-black {
    fill: #000000; 
    fill-opacity: 1;
    fill-rule: nonzero;
    stroke: none;
  }

  & .php-white {
    fill: #ffffff;
    fill-opacity: 1;
    fill-rule: nonzero; 
    stroke: none;
  }

  & .php-1 {
    fill: url(#radialGradient3452);
    stroke: none
  }

  & .php-2 {
    fill: #777bb3;
    fill-opacity: 1;
    fill-rule: nonzero;
    stroke: none
  }

  & .php-stop-1 {
    stop-opacity: 1;
    stop-color: #aeb2d5
  }

  & .php-stop-2 {
    stop-opacity:1;
    stop-color: #484c89
  }

  @media (max-width: 768px) {
    & h2{
      margin-bottom: 30px;
    }
    & ul{
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 30px;
    }
    & li svg{
      width: 100%;
      margin: 0;
    }
    
  }
`
