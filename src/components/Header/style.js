import styled from 'styled-components'


export const Container = styled.section`
width:100%;
height:7vh;
display:flex;
opacity:80%;
position:fixed;
justify-content:space-between;
background-color:#D3D3D3;
z-index:99;
border:solid 2px black;
filter:contrast(1.5);
`
export const Logo = styled.div`
width:15vw;
display:flex;
justify-content:center;
align-items:center;
`
export const BoxIcon = styled.div`
display:flex;
width:40vw;
justify-content:space-evenly;
align-items:center;
`
export const Image = styled.img`
width:2vw;
`
export const Insta = styled.img`
width:3vw;

`
export const Arrow = styled.img`
width:3vw;
`
export const Item = styled.h2`
color:black;
&:hover{
    cursor:pointer;
    color:white;
    font-size:1.6vw;
}

`
