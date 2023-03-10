import React from 'react';
import CompteurDeVues from '@/components/counter'
import styles from '@/styles/Article.module.css'
import data from '@/datas/articles.json'
import Navigation from '@/components/navbar';

function PageAvecCompteur() {
  const lastArticle = data[0];
  return (
    <div>
        <Navigation/>
              <div  className={styles.article}>
              <div className={styles.pictureBanner}></div>
              <div className={styles.details}>
                <div className={styles.title}>{lastArticle.title}</div>
                <div className={styles.views}><CompteurDeVues/></div>
              </div>
              <div className={styles.line}></div>
              <div className={styles.articleContent}>
                {lastArticle.content}
              </div>
            </div>




    </div>
  );
}

export default PageAvecCompteur;
