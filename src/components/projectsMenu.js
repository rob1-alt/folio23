import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "@/styles/Dropdown.module.css";
import Link from "next/link";


const ProjectMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <div>
      <div onMouseOver={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)} className={styles.projects}>       
          Projects
        <Image src="/arrow_menu.svg" className={styles.arrowMenu} alt="arrow" width={25} height={25} />
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className={styles.dropdownMenu}
          onMouseOver={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {options.map((option) => (
            <Link key={option} href="projects/" className={styles.dropdownItem}>
              {option}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ProjectMenu;
