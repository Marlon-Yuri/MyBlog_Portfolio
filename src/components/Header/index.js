import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as S from './style';
import './header.css';
import {Link} from 'gatsby';
import styled from 'styled-components';

const StyledLink= styled(Link)`
text-decoration: none;
color: black;  
font-weight:bolder;
`

export function Header(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
          headers {
            face {
              url
            }
            git {
              url
            }
            insta {
              url
            }
            linkedin {
              url
            }
            logo {
              url
            }
          }
        }
    }
    
    `)

    const {logo, insta, git, face, linkedin } = data.alldata.headers[0]
    return(
      <div>
        <S.Container>       
          <S.Logo>
           <S.Arrow className="arrow" src={logo.url}/>
          </S.Logo>         
          <S.BoxIcon>
         <StyledLink to='/About'><S.Item> About me</S.Item> </StyledLink>         
         <StyledLink to='/Gallery' > <S.Item>Gallery</S.Item> </StyledLink>
         <StyledLink to='/Work' > <S.Item>Work</S.Item> </StyledLink>
         <a href='https://www.instagram.com/marlon_yuri/'><S.Insta src={insta.url}/></a>
         <a href='https://www.linkedin.com/in/marlon-yuri-jesus-97437b207/'><S.Image src={linkedin.url}/></a>
         <a href='https://github.com/Marlon-Yuri'> <S.Image src={git.url}/></a>
         <a href='https://www.facebook.com/marlonyuri.jesus/'> <S.Image src={face.url}/></a>
          </S.BoxIcon>         
        </S.Container>      
      </div>
    )
}