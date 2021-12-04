import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import * as S from './style'
import Carousel from 'react-elastic-carousel'
import './footer.css'
 

export function Footer(){
    const data = useStaticQuery(graphql`
    query{
        alldata{
          footers {
            background {
              url
            }
            picture1 {
              url
            }
            picture2 {
              url
            }
            picture3 {
              url
            }
          }
        }
    }
    
    `)

    const {background,picture2,picture1,picture3} = data.alldata.footers[0]
    return(
      <div>
        <S.Container back={background.url}>
       
        </S.Container>
       
      </div>
    )
}