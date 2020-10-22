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
  & li svg.Next{
    width: 53px;
    height: auto;
  }
  & li svg.Next path,
  & li svg.wordpress path,
  & li svg.elementor path,
  & li svg.github path{
    fill: #fff;
  }
  & li svg.html path:nth-child(4),
  & li svg.css path:nth-child(4){
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
    & li svg.Next{
      height: 35px;
      width: 100%;
    }
  }
`
