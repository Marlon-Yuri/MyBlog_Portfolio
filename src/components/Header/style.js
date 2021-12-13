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
@media(max-width: 1030px) {
    width:91.6%;
    
}
@media(max-width: 768px) {
    width:100%;
    
}
@media(max-width: 1024px) {
    width:100%;
    
}


`
export const Logo = styled.div`
width:15vw;
display:flex;
justify-content:center;
align-items:center;
@media(max-width: 320px) {
    display:none
}
`
export const BoxIcon = styled.div`
display:flex;
width:40vw;
justify-content:space-evenly;
align-items:center;
@media(max-width: 768px) {
    width:65vw;
}
@media(max-width: 320px) {
    width:100%;
    font-size:3vw;
}
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
    color:#4682B4;
    font-size:1.6vw;
}

`
