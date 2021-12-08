import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import './main.css'

export function Main(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
          mains {
            background {
              url
            }
            self {
              url
            }
            console {
              url
            }
          }
        }
    }
    
    `)

    const {background, self, console} = data.alldata.mains[0]
    return(
      <div>
        <S.Backg back={background.url}>
          <S.Selfie back={self.url}></S.Selfie>
          <S.Box className='Title'>
          <h1>It's me, Marlon</h1>
          </S.Box> 
          <S.Subtitle>
          <h2>"I'm a Front-End developer, English teacher and Musician. Coding while holding a mandolim"</h2>
          </S.Subtitle>  
          <a href='https://jadevscoronga.netlify.app/'><S.Console className='console' src={console.url} alt="console"/> </a>
               
          </S.Backg>

       
      </div>
    )
}