import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {Link} from 'gatsby';
import styled from "styled-components"
import Carousel from 'react-elastic-carousel'

const Background =styled.section`
width:100%;
height:170vh;
position:relative;
background-image: url(${props => props.back});
background-size:cover;
@media(max-width: 320px) {
  height:90vh;
  
}
`
const Container = styled.section`
display:flex;
height:65vh;
justify-content:space-around;
align-items:center;
@media(max-width: 1024px) {
    display:flex;
    flex-direction:column;
  
    
  
}

`
const Img = styled.img`
width:40vw;
`
const StyleCarousel =styled(Carousel)`
width:40vw;
height:62vh;
@media(max-width: 1024px) {
  width:100vw;
  margin-top:5%;
  height:62vh;
  
  
}

`
const H1 =styled.h1`
font-size:3.5vw;
font-weight:bolder;
color:white;
@media(max-width: 320px) {
  font-size:6vw;
  margin-top:5%;
}
`

const ContainerMusic = styled.section`
display:flex;
height:65vh;
position:absolute;
width:100%;
justify-content:space-around;
align-items:center;
@media(max-width: 1024px) {
  display:flex;
  flex-direction:column-reverse;
  position:absolute;
  top:47%;
  

}
`
const Item = styled.div`
width:10vw;
height:5vh;
position:absolute;
left:89%;
display:flex;
justify-content:center;
align-items:center;
top:93%;

`
const StyledLink= styled(Link)`
text-decoration: none;
color: #FFE4B5;  
font-weight:bolder;
font-size:1.8vw;
&:hover{
  color:black;
  transform: rotate(360deg);
}
@media(max-width: 1024px) {
  font-size:3.4vw;
  
}
`
export default function Work(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
          works {
            background {
              url
            }
            kylo {
              url
            }
            naruto {
              url
            }
            taxi {
              url
            }
            music {
              url
            }
            music2 {
              url
            }
            music3 {
              url
            }
            music4 {
              url
            }
          }
        }
    }
    
    `)

    const {background, kylo, naruto, taxi, music, music1, music2, music3, music4 } = data.alldata.works[0]
    return(
      <div>
       <Background back={background.url}>
         <Container>
           <H1>Programming skills</H1>
          <StyleCarousel>
            <Img src={kylo.url} alt=''/>
            <Img src={naruto.url} alt=''/>
            <Img src={taxi.url} alt=''/>
          </StyleCarousel>
         </Container>
         <ContainerMusic>
         <StyleCarousel>
            <Img src={music.url} alt=''/>
            <Img src={music4.url} alt=''/>
            <Img src={music2.url} alt=''/>
            <Img src={music3.url} alt=''/>
          </StyleCarousel>
         <H1>Music skills</H1>
         </ContainerMusic>
         <Item><StyledLink to='/'>Home</StyledLink></Item> 
       </Background>
      </div>
     
    )
}