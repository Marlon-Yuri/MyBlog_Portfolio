import React, {useState} from 'react'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import {Footer} from '../components/Footer'
import "../components/global/global.css"
import styled from 'styled-components'


export default function Index() {

  return (
     <div>
      
      <Header/>
      
      <Main />
       
      <Footer/>
      
     </div>
      
    
  )
}