import React, {useState} from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import * as S from './style'
import './footer.css'
import styled from 'styled-components'
import { ThemeProvider, CssBaseline, createMuiTheme, Switch } from  '@material-ui/core'
import { green } from '@material-ui/core/colors'


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

    const [darkMode, setDarkMode] =useState(false);

    const theme = createMuiTheme({
      palette:{
        type:darkMode ? 'dark' : 'light',
      }
      
    }
    )


    const handleDarkMode = () =>{
      setDarkMode(!darkMode);
     
    }
    

    
    const {background,picture2,picture1,picture3} = data.alldata.footers[0]
    return(
      <div className='foot'>
        <ThemeProvider theme={theme}>
          <CssBaseline>
         <S.Container >
           <Switch  className='switch' onChange ={handleDarkMode} value={darkMode}/>
       <S.ContactBox>
         <S.Whats>
          <S.Img src ={picture1.url}/>
          <h3 className ='H3'>+55 21 974608778</h3>
         </S.Whats>
         <S.Email>
         <S.Img src ={picture2.url}/>
         <h3 className ='H3'>marlonyurimi@gmail.com</h3>
         <h3 className ='H3'>marlon.yuri@precisaser.org</h3>   
         </S.Email>
       </S.ContactBox>
        </S.Container>
    </CssBaseline>
       
        </ThemeProvider>
       
      </div>
    )
}