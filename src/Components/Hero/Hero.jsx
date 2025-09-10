import React from 'react'
import imageSrc1 from '../../assets/image.png'

import styles from'./Hero.module.css'

const Hero = () => {
  return (

      <div className={styles.section1}> 
      
       <div className={styles.container}>
      

       <span className={styles.name}> Hi, I'm Shehanaaz </span>   
   
         <p className= {styles.intro}>   I am an aspiring &nbsp; <span className={styles.name}>Front End Developer  </span>   </p> 
    
      <p className= {styles.intro}>   focusing on creating user interfaces </p> 
       <p className= {styles.intro}>  for mobile and desktop applications </p> 
       <div>
            <a  className={styles.btnbox} href="https://github.com/Shehanaaz-dotcom" target="_blank">GitHub</a></div>

       </div>
  
       <div>
  
        <img className={styles.image} src={imageSrc1}/>          
      </div>


      </div>
  

  )
}

export default Hero