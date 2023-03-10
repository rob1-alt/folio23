import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import showItemsMenu from '@/components/animation'
import ProjectMenu from '@/components/projectsMenu'
import NewsMenu from '@/components/newsMenu'
import { motion } from "framer-motion";
import Image from 'next/image'

export default function Navigation() {
    const [openMenu, setOpenMenu] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);
    const menu = ["Myflexoffice", "Corse matin", "Option 3"]
    function handleClick() {
        setOpenMenu(!openMenu);
        setCloseMenu(!closeMenu)
        showItemsMenu();
      }
    return(
        <div className={styles.navigation}>
        <div className={styles.menu}>
          <span>Home Page</span>
          <button onClick={handleClick} >  
            <Image 
            className={styles.arrow}  src="hamburger.svg" alt="arrow" width={15} height={15} />
          </button>
          {openMenu && (        
        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.menuFull}>
        {/* <button 
        className={styles.closeButton}> 
          <Image className={styles.close} src="cross.svg" alt="close" width={35} height={35} />
        </button> */}
          <ul>
            <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.menuItem}>Projects
            </motion.li>
            <motion.li 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className={styles.menuItem}>About me 
            </motion.li>
            <motion.li 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={styles.menuItem}>Contact
            </motion.li>

          </ul>
          {/* Contenu du menu */}
        </motion.div>
      )}
        
        </div>
        
        <div className={styles.breadcrumb}>
          <ProjectMenu className={styles.projects} options={menu} />
          <NewsMenu className={styles.projects} options={menu} />
        </div>
      </div>
    )
    
}   