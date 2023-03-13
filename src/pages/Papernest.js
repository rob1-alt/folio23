import React from 'react';
import CompteurDeVues from '@/components/counter'
import styles from '@/styles/Article.module.css'
import data from '@/datas/articles.json'
import Navigation from '@/components/navbar';
import Image from 'next/image'

function PageAvecCompteur() {
  const lastArticle = data[0];
  return (
    <div>
        <Navigation/>
              <div  className={styles.article}>
              <div className={styles.pictureBanner}>
                <Image src={lastArticle.banner} className={styles.banner} width={1200} height={100}/>
              </div>
              <div className={styles.details}>
                <div className={styles.title}>{lastArticle.title}</div>
                <div className={styles.views}><CompteurDeVues/></div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.articleContent}>
                {lastArticle.firstContent}
                
              </div>
              <div className={styles.articleContent}>
                <div className={styles.pictureBanner1}>
                <Image src={lastArticle.pictureFull} className={styles.pictureFull} width={1200} height={100}></Image>

                  {lastArticle.twiceContent}
                </div>
              </div>
            </div>




    </div>
  );
}

export default PageAvecCompteur;
