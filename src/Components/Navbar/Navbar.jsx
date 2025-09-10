import React, {useState} from 'react'

import styles from './Navbar.module.css'
import imageSrc from '../../assets/hamburger.png'
import imageSrc1 from '../../assets/close.png'



export const Navbar = () => {
  const[menuOpen,setMenuOpen]=useState(false);

  return (
  
  <div className={styles.navbar}>
      <a className={styles.title} href="/"> Portfolio </a>
  
              <div className={styles.menu}>
                <img className={styles.menuBtn} src={menuOpen?imageSrc1:imageSrc } onClick={()=> setMenuOpen(!menuOpen)}/>

                <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
                  <li ><a className={styles.active} href="#Home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects"> Projects</a></li>
                <li><a href="#Contact">Contact</a></li>
  
             </ul>

            </div>
</div>
 
  )
}

export default Navbar