import Head from 'next/head'
import { useState } from 'react'
import Link from "next/link";
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import showItemsMenu from '@/components/animation'
import ProjectMenu from '@/components/projectsMenu'
import NewsMenu from '@/components/newsMenu'
import Meteo from '@/components/weather'
import { motion } from "framer-motion";

export default function Home() {
  const [date, setDate] = useState(new Date());
  const options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' };
  const dateString = date.toLocaleDateString('fr-FR', options);
  const [openMenu, setOpenMenu] = useState(false);
  const [closeMenu, setCloseMenu] = useState(false);
  const menu = ["Myflexoffice", "Corse matin", "Option 3"]


  
  
    function handleClick() {
      setOpenMenu(!openMenu);
      setCloseMenu(!closeMenu)
      showItemsMenu();
    }
    return (
    <>
      <Head>
        <title>Robin Pautigny</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main className={styles.main}>
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
        <motion.button 
        className={styles.closeButton} onClick={handleClick} > 
          <Image className={styles.close} src="cross.svg" alt="close" width={35} height={35} />
        </motion.button>
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
      <div className={styles.body}>
        <div className={styles.rowMe}>
          <h1><span>Robin Pautigny</span></h1>
          <div className={styles.profilePicture}></div>
        </div>
        
      </div>
      <div className={styles.tag}>
        <div className={styles.tag1}>
          <span className={styles.tagText}>Creative entrepreneur</span>
        </div>
        <div className={styles.tag2}>
        <span className={styles.tagText}>{dateString}</span>
        </div>
        <div className={styles.tag3}>
        <span className={styles.tagText}>portfolio</span>
        </div>
      </div>
      
      <div className={styles.grid}>
        <div className={styles.grid1}>
          <div className={styles.pictureCard}></div>
          <div className={styles.titleCard}>
            <span>Design Generate</span>
            <span>45k views</span>
          </div>
          <div className={styles.line}></div>
          <p className={styles.description}>Testing popular designing tools and evaluating them with <span className={styles.bold}>MetroLab</span> crew and artists.</p>
        </div>
        <div className={styles.grid2}>
          <Meteo/>
        </div>
        <div className={styles.grid3}></div>
      </div>
      </main>
    </>
    
  )}