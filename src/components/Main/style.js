import styled from "styled-components";


export const Backg = styled.section`
width:100%;
height:94vh;
position:relative;
background-image: url(${props => props.back});
background-size:cover;
background-position-y:75%;
display:flex;
justify-content:center;
align-items:center;

`
export const Selfie = styled.img`
border:solid 7px #20B2AA ;
width:27vw;
border-radius:50%;
position:absolute;
left:4.2%;
top:17%;
border-style: double;
 
`
export const Box = styled.div`
color:rgba(255, 255, 255, .75);
font-family:monospace;
font-size:3em;
position:absolute;
left:40%;
top:30%;
border-right:2px solid rgba(255, 255, 255, .75);
 
`
export const Subtitle = styled.div`
color: white;
position:absolute;
left:40%;
top:50%;
width:35vw;
font-style:italic;
`
export const Console = styled.img`
position:absolute;
left:38%;
top:80%;
border-radius:50%;
width:8vw;
`
