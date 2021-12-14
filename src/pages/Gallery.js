import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import {Link} from 'gatsby';
import styled from "styled-components"


const Background =styled.section`
width:100%;
position:relative;
display:flex;
flex-direction:column;
align-items:center;
background-image: url(${props => props.back});
background-size:cover;
background-position-x:90%;
@media(max-width: 320px) {
  height:700vh;
  width:100vw;
  

}
`
const Header =styled.section`
width:100%;
height:20vh;
display:flex;
align-items:center;
justify-content:center;
`
const H1=styled.h1`
font-size:2vw;
font-weight:bolder;
@media(max-width: 320px) {
  font-size:9vw;
}
@media(max-width: 1024px) {
  font-size:6vw;
}
`
const Container =styled.section`
width:90%;
display:flex;
justify-content:space-evenly;
flex-wrap:wrap;
@media(max-width: 320px) {
  display:flex;
  height:900vh;

}
`
const Img =styled.img`
width:20vw;
height:37vh;
&:hover{
  border:solid black;
  cursor:pointer;
}
@media(max-width: 320px) {
  width:60vw;
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
@media(max-width: 320px) {
  position:absolute;
  top:98%;
  left:60%;
}
`
const StyledLink= styled(Link)`
text-decoration: none;
color: #FFE4B5;  
font-weight:bolder;
font-size:1.8vw;
&:hover{
  color:red;
  transform: rotate(360deg);
}
@media(max-width: 320px) {
  font-size:6vw;
}
`
export default function Gallery(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
            galleries {
                pi2 {
                  url
                }
                pic1 {
                  url
                }
                pic10 {
                  url
                }
                pic11 {
                  url
                }
                pic12 {
                  url
                }
                pic13 {
                  url
                }
                pic14 {
                  url
                }
                pic15 {
                  url
                }
                pic16 {
                  url
                }
                pic3 {
                  url
                }
                pic4 {
                  url
                }
                pic5 {
                  url
                }
                pic6 {
                  url
                }
                pic7 {
                  url
                }
                pic8 {
                  url
                }
                pic9 {
                  url
                }
                back {
                  url
                }
              }
        }
    }
    
    `)

    const {back, pic1, pi2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16} = data.alldata.galleries[0]
    return(
      <div>
       <Background back={back.url}>
         <Header>
           <H1>My gallery</H1>
         </Header>
         <Container>
           <Img src ={pi2.url} alt=''/>
           <Img src ={pic1.url}/>
           <Img src ={pic4.url}/>
           <Img src ={pic3.url}/>
           <Img src ={pic5.url}/>
           <Img src ={pic7.url}/>
           <Img src ={pic9.url}/>
           <Img src ={pic6.url}/>
           <Img src ={pic8.url}/>
           <Img src ={pic10.url}/>
           <Img src ={pic12.url}/>
           <Img src ={pic14.url}/>
           <Img src ={pic11.url}/>
           <Img src ={pic15.url}/>
           <Img src ={pic16.url}/>
           <Img src ={pic13.url}/>        
         </Container>
         <Item><StyledLink to='/'>Home</StyledLink></Item>
       </Background>
      </div>
     
    )
}