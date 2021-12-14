import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {Link} from 'gatsby';
import styled from "styled-components"

const Container = styled.section`
width:100%;
height:60vh;
display:flex;
border:solid 2px black;
background-image: url(${props => props.back});
background-size:cover;
background-position-y:54%;
@media(max-width: 600px) {
  background-position-y:10%;
  height:40vh;

}

`
const Backmain = styled.section`
width:100%;
height:65vw;
background-image: url(${props => props.backgroundmain});
background-size:cover;
position:relative;
background-position-y:66%;

`
const Img = styled.div`
width:33vw;
height:50vh;
position:absolute;
left:33%;
top:-8%;
border:solid 9px white;
border-radius:8%;
background-image: url(${props => props.backselfie});
background-size:cover;
background-position-x:77%;
@media(max-width: 1024px) {
  width:30vw;
  top:10%;
  height:40vh;
  border:solid 1px black;
  border-radius:0%;
  position:absolute;
  left:10%
  
}
@media(max-width: 600px) {
  width:32vw;
  height:20vh;
  
}
`
const Item = styled.div`
width:10vw;
height:5vh;
position:absolute;
left:84%;
display:flex;
justify-content:center;
align-items:center;
top:93%;
@media(max-width: 600px) {
  position:absolute;
  top:10%;
  
  
}
`
const StyledLink= styled(Link)`
text-decoration: none;
color: #FFF;  
font-weight:bolder;
font-size:1.6vw;
&:hover{
  color:black;
  transform: rotate(360deg);
  
}
@media(max-width: 600px) {
  font-size:3vw;
  &:hover{
    color:black;
  }
  
  
}
`
export default function About(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
          abouts {
            backmain {
              url
            }
            selfie {
              url
            }
            background {
              url
            }
          }
        }
    }
    
    `)

    const {background, selfie, backmain } = data.alldata.abouts[0]
    return(
      <div>
      <Container back={background.url} >
      </Container>
      <Backmain backgroundmain={backmain.url} >
        <Img backselfie ={selfie.url}></Img>
        <Item><StyledLink to='/'>Home</StyledLink></Item> 
      </Backmain>
      </div>
     
    )
}