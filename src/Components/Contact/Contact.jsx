import React from 'react'
import styles from './Contact.module.css'
import imageSrc16 from '../../assets/email.png'
import imageSrc17 from '../../assets/phone.png'
import imageSrc18 from '../../assets/linkedin.png'

const Contact = () => {
  return (
    <section id="Contact">
    

      <div className={styles.section4}>
        
         <h4 className={styles.heading3}>  Contact  Me</h4> 
     

         <div className={styles.container1}>
        <div className={styles.subcontainer1}>
          <img className={styles.image4} src={imageSrc16}/>
        <a href="mailto:shehanaazbanu1999@gmail.com? cc=google.com &bcc=facebook.com &subject=Hello & body=Demo email" target="_blank"> <span className
        ={styles.subcontainer2}> shehanaazbanu1999@gmail.com </span></a>
        </div>
    
       
        <div className={styles.subcontainer1}>
          <img className={styles.image4} src={imageSrc17}/>
        <a href ="tel:+91 7013747155"><span className
        ={styles.subcontainer2}>+917013747155 </span></a> 
         </div>
 

  
        <div className={styles.subcontainer1}>
   
          <img className={styles.image4} src={imageSrc18}/>
        <a href ="https://www.linkedin.com/in/shehanaaz-b-697582317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><span className
        ={styles.subcontainer2}>LinkedIn</span></a> 
         </div>
</div>
</div>
   <footer>
    <div className={styles.foot}>

     <div className={styles.copyright}> <span> &#169;</span>2025  All rights are reserved.   </div>
      
    <div className={styles.iconname}> Icons By:
    <a target="_blank" href="https://icons8.com">Icons8</a> 
     </div>

    <div className={styles.icon}>
    <a target="_blank" href="https://icons8.com/icon/3tC9EQumUAuq/github">GitHub</a> 
    <a target="_blank" href="https://icons8.com/icon/uMEWjbCxNHQw/xbox-menu">Hamburger Button</a>
    <a target="_blank" href="https://icons8.com/icon/23537/close-window">Close Window</a>       
    <a target="_blank" href="https://icons8.com/icon/12921/phone">Phone</a>  
    <a target="_blank" href="https://icons8.com/icon/60688/email">Email</a> 
    <a target="_blank" href="https://icons8.com/icon/8808/linkedin">LinkedIn</a> 

</div>

  
    </div>     
                                   
   </footer>


    </section>

  )
}

export default Contact