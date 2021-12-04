import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import './header.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Router>
          <S.BoxIcon>
            <Link><S.Item>Work</S.Item></Link>
         
          <S.Item>Music</S.Item>
          <S.Item>Origin</S.Item>
          <S.Insta src={insta.url}/>
          <S.Image src={git.url}/>
          <S.Image src={face.url}/>
          </S.BoxIcon>
            </Router>
          
        </S.Container>
       
      </div>
    )
}