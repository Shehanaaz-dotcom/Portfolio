import React from 'react'

import imageSrc12 from '../../assets/portfolio1.jpeg'
import imageSrc13 from '../../assets/quiz2.jpg'
import imageSrc14 from '../../assets/ecommerce.jpg'
import imageSrc15 from '../../assets/chatapp.png'
import imageSrc16 from '../../assets/jobportal.jpg'
import imageSrc17 from '../../assets/searchapp.png'
import imageSrc18 from '../../assets/taskmanagement.png'
import styles from'./Projects.module.css'

const Projects = () => {
  return (


    <section id = "projects">
      <div className={styles.section3}>
     <h1 className={styles.heading2}> Projects </h1>
     <div> <p className={styles.p3}> I have built User Interfaces for Webistes/Web applications using HTML, CSS and its frameworks (Bootstrap and Tailwind CSS),  </p> 
        <p className={styles.p3}>  JavaScript along with its libraries and frameworks(ReactJs and AngularJs) and API's</p> 
       
         </div>
          

   <div>
<div className={styles.projects}>

  
            <a className={styles.proname} href="#" target="_blank">
          <div>
          <img className={styles.image3}  src={imageSrc12}/>
          </div>
          <div>
              <p className={styles.name1}> My Portfolio  </p>
  <p className={styles.name2}> Portfolio </p>    
          </div>

        </a>





 <a className={styles.proname} href="https://Shehanaaz-dotcom.github.io/Eshop/"  target="_blank">
          <div>
          <img className={styles.image3}  src={imageSrc14}/>
          </div>
          <div>
              <p className={styles.name1}> e-SHOP   </p>
  <p className={styles.name2}>E-commerce Webiste  </p>
          </div>

       </a>

 
</div>
<div className={styles.projects}>
      
        
                 
         <a className={styles.proname} href="https://Shehanaaz-dotcom.github.io/Quiz/" target="_blank">
          <div>
          <img className={styles.image3} src={imageSrc13}/>
          </div>
          <div>
              <p className={styles.name1}>   Quiz </p>
  <p className={styles.name2}>Online Quiz App </p>
            
          </div>

</a>
        <a className={styles.proname} href="https://Shehanaaz-dotcom.github.io/TaskManagement/" target="_blank">
          <div>
          <img className={styles.image3}  src={imageSrc18}/>
          </div>
          <div>
              <p className={styles.name1}> To Do  </p>
              <p className={styles.name2}>  Task Management </p>
          </div>
       </a>
     
</div>

    </div>

</div>

    </section>




  )
}

export default Projects
