import React from 'react'
import imageSrc2 from '../../assets/html.png'
import imageSrc3 from '../../assets/css.png'
import imageSrc4 from '../../assets/js.jpg'
import imageSrc5 from '../../assets/react.png'
import imageSrc6 from '../../assets/bootstrap.png'
import imageSrc7 from '../../assets/DXC.png'
import imageSrc8 from '../../assets/Aitam.jpg'
import imageSrc9 from '../../assets/angular.png'
import imageSrc10 from '../../assets/vscode.png'
import imageSrc11 from '../../assets/figma.png'
import styles from './About.module.css'

 const About = () => {
  return (
  
<section id= "about">
  <div className={styles.section2}> 

     <div> <h1 className={styles.heading1} > About Me</h1> </div>

    <div> 
    <p className={styles.p1}> I have Passion for creating user interfaces for dynamic, user-friendly websites.</p> 
    <p className={styles.p1}>  Proficient in building and optimizing responsive designs for desktop and mobile devices.</p>  </div>
                       


<div className={styles.part1}>
  
  <div className={styles.part2}>
    
     <div className={styles.skills}>
   
      <h3 className={styles.subheading}>Skills</h3>
       <div className={styles.skills1}>
        <div ><img  className={styles.image1} src={imageSrc2}/><h5>HTML</h5></div>
         <div >  <img   className={styles.image1} src={imageSrc3}/><h5>CSS</h5></div>
          <div >   <img  className={styles.image1} src={imageSrc4}/><h5>JavaScript</h5></div>
          </div>
          <div className={styles.skills1}>
         <div >   <img className={styles.image1} src={imageSrc5}/><h5>ReactJs</h5></div>
        <div> <img className={styles.image1}  src={imageSrc6}/><h5>Bootstrap</h5></div>
         <div> <img className={styles.image1}  src={imageSrc9}/><h5>Angular</h5></div>
        </div>

     <div className={styles.column4}>
       <h3 className={styles.subheading}>Tools </h3>
          <div className={styles.skills1}>

         <div >   <img  className={styles.image1} src={imageSrc10}/><h5>VS Code</h5></div>
        <div> <img className={styles.image1} src={imageSrc11}/><h5>Figma</h5></div>

        </div>

     </div>
      
  </div>
 </div>


 <div className={styles.part3}>


 <div className={styles.we}>

<h3 className={styles.subheading}>Work Experience</h3>

<div className={styles.box}>
  
  <div>
  <img className={styles.image2} src={imageSrc7}/> </div>
  
  <div>

 <p className={styles.p2}><b>DXC TECHNOLOGY   (Jun 2021 - Aug 2022)</b></p>
  <p className={styles.p2}>IT Support Analyst</p>
  <p className={styles.p2}>ITIL Operations - SLA Management, Incident Management </p>
  <p className={styles.p2}>Stakeholder Management, Troubleshooting, Client Support. </p>

</div>
</div>


  
  </div>




 <div className={styles.column6}>
 <h3 className={styles.subheading}>Education</h3>
 <div className={styles.box}>
  
  <div>
  <img className={styles.image2} src={imageSrc8}/> </div>
  
  <div>
   <p className={styles.p2}><b>ADITYA INSTITUTE OF TECHNOLOGY AND MANAGEMENT </b></p>
  <p className={styles.p2}>2017-2021</p>
  <p className={styles.p2}>Bachelor of Technology - Computer Science and Engineering</p>
   <p className={styles.p2}>CGPA: 7.78</p>

</div>
</div>


 </div>
</div>
 </div>
 </div>

</section>


  )
}

export default About