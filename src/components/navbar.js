import { useEffect, useState } from 'react'
import styles from '@/styles/Home.module.css'
import showItemsMenu from '@/components/animation'
import ProjectMenu from '@/components/projectsMenu'
import NewsMenu from '@/components/newsMenu'
import { motion } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'

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
            className={styles.burger}  src="hamburger.svg" alt="arrow" width={15} height={15} />
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
          <Link href="/">
                <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className={styles.menuItem}>Accueil
                </motion.li>
            </Link>
            <Link href="/projects">
                <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className={styles.menuItem}>Projects
                </motion.li>
            </Link>
            <Link href="/about">
                <motion.li 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className={styles.menuItem}>About me 
                </motion.li>
            </Link>
            <Link href="/news">
                <motion.li 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={styles.menuItem}>Blog
                </motion.li>
            </Link>
            <Link href="/contact">
                <motion.li 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className={styles.menuItem}>Contact
                </motion.li>
            </Link>

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