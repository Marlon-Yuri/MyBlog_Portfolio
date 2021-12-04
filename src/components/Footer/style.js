import styled from "styled-components";


export const Container = styled.section`
width:100%;
height:40vh;
background: url(${props => props.back});
margin-top:0.5%;
background-size:cover;
border:solid 2px black;
display:flex;
align-items:center;
background-position-y:40%;
`