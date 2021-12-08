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
            logo {
              url
            }
          }
        }
    }
    
    `)

    const {logo, insta, git, face } = data.alldata.headers[0]
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
          <S.Insta src={insta.url}/>
          <S.Image src={git.url}/>
          <S.Image src={face.url}/>
          </S.BoxIcon>         
        </S.Container>      
      </div>
    )
}