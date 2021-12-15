import styled from "styled-components";


export const Container = styled.section`
width:100%;
height:40vh;
margin-top:0.5%;
display:flex;
align-items:center;
justify-content:center;
backgound-color:#DCDCDC;

`
export const Whats = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
justify-content:space-evenly;

`
export const Email = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
justify-content:space-evenly;
`
export const ContactBox = styled.section`
 
width:50vw;
height:20vh;
display:flex;
position:absolute;
justify-content:space-evenly;
@media(max-width: 600px) {
    width:100%;
    position:absolute;
    bottom:-15%;
  }
`
export const Img = styled.img`
width:3vw;
@media(max-width: 600px) {
    width:21vw;
  }

`
export const H3 = styled.h3`
 
@media(max-width: 600px) {
    font-size:3vw;
  }
`
