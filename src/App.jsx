import React, { useState }  from 'react'
import styles from './App.module.css'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import { BrowserRouter,HashRouter, Route, Routes } from 'react-router-dom'




function App() {
   return(

<div className={styles.App}>
  <BrowserRouter basename={"/Portfolio/"}>

<Navbar/>
<Hero/>
<About/>
 <Projects/>
 <Contact/>

 </BrowserRouter>


</div>
 
  )
}

export default App




