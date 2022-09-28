import styled from "styled-components";


export const Backg = styled.section`
width:100%;
height:94vh;
position:relative;
background-image: url(${props => props.back});
background-size:cover;
background-position-y:75%;
display:flex;
border: solid 4px black;
justify-content:center;
align-items:center;

`
export const Selfie = styled.div`
border:solid 7px #20B2AA ;
width:31vw;
height:62vh;
border-radius:50%;
position:absolute;
left:4.2%;
background-image: url(${props => props.back});
background-size:cover;
background-position-y:30%;
top:17%;
border-style: double;

  @media(max-width: 768px) {
    position:absolute;
    left:69%;
    top:67%;
    width:25vw;
    height:25vh;
}
@media(max-width: 600px) {
  position:absolute;
  top:80%;
  border:solid white;
  width:27vw;
  height:15vh;
}
`
export const Box = styled.div`
color:rgba(255, 255, 255, .75);
font-family:monospace;
font-size:2.5vw;
position:absolute;
left:40%;
top:30%;
border-right:2px solid rgba(255, 255, 255, .75);
@media(max-width: 768px) {
  position:absolute;
  left:15%;
}
@media(max-width: 600px) {
  width:76vw;
  font-size:5.5vw;

}
 
`
export const Subtitle = styled.div`
color: white;
font-size: 1vw;
position:absolute;
left:40%;
top:50%;
width:35vw;
font-style:italic;
@media(max-width: 768px) {
  position:absolute;
  left:15%;
  width:55vw;
}
@media(max-width: 600px) { 
  font-size:4vw;
}
`
export const Console = styled.img`
position:absolute;
left:38%;
top:80%;
border-radius:50%;
width:8vw;
@media(max-width: 600px) { 
  width:15vw;
}

`
