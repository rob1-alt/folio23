import React from 'react';
import CompteurDeVues from '@/components/counter';
import styles from '@/styles/Article.module.css'

function PageAvecCompteur() {
  return (
    <div>
      <div className={styles.article}>
        <div className={styles.pictureBanner}></div>
        <div className={styles.details}>
          <div className={styles.title}>Become a product manager @ Papernest</div>
          <div className={styles.views}><CompteurDeVues/></div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.articleContent}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam lectus, finibus ut nulla a, luctus aliquet enim. Suspendisse in felis in nisi efficitur convallis. Nullam imperdiet orci tellus, sit amet pharetra quam semper vel. Nunc rhoncus eros id felis commodo, eu blandit neque mattis. Maecenas ac diam in tortor tincidunt interdum. Morbi convallis ante lacus, in consectetur risus pharetra sed. Nullam feugiat quam urna, quis tristique dolor iaculis ut. 

Phasellus pulvinar nulla ac pharetra aliquet. Vestibulum lorem urna, posuere vitae eros et, fermentum lobortis metus.
Mauris egestas venenatis urna, sagittis ultrices purus iaculis ac. Nam cursus ornare metus non sollicitudin. Praesent egestas, odio tincidunt lacinia viverra, nunc ante tincidunt est, et scelerisque nibh erat eu nisl. Aliquam maximus et sapien sed hendrerit. Aenean est magna, dictum non interdum nec, rutrum quis leo. 

Pellentesque condimentum gravida mi, id feugiat ante efficitur a. Nam dignissim dui quis dui porta tincidunt. Nunc suscipit fermentum orci, vitae sagittis urna pharetra ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere ex a lorem rutrum auctor.
Quisque eu quam euismod, ultrices risus ut, ullamcorper nulla. Etiam condimentum suscipit purus vel accumsan. Donec volutpat mi eget ligula suscipit sollicitudin. Cras pulvinar metus eu purus sodales,

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam lectus, finibus ut nulla a, luctus aliquet enim. Suspendisse in felis in nisi efficitur convallis. Nullam imperdiet orci tellus, sit amet pharetra quam semper vel. Nunc rhoncus eros id felis commodo, eu blandit neque mattis. Maecenas ac diam in tortor tincidunt interdum. Morbi convallis ante lacus, in consectetur risus pharetra sed. Nullam feugiat quam urna, quis tristique dolor iaculis ut. 

Phasellus pulvinar nulla ac pharetra aliquet. Vestibulum lorem urna, posuere vitae eros et, fermentum lobortis metus.
Mauris egestas venenatis urna, sagittis ultrices purus iaculis ac. Nam cursus ornare metus non sollicitudin. Praesent egestas, odio tincidunt lacinia viverra, nunc ante tincidunt est, et scelerisque nibh erat eu nisl. Aliquam maximus et sapien sed hendrerit. Aenean est magna, dictum non interdum nec, rutrum quis leo. 

Pellentesque condimentum gravida mi, id feugiat ante efficitur a. Nam dignissim dui quis dui porta tincidunt. Nunc suscipit fermentum orci, vitae sagittis urna pharetra ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere ex a lorem rutrum auctor.
Quisque eu quam euismod, ultrices risus ut, ullamcorper nulla. Etiam condimentum suscipit purus vel accumsan. Donec volutpat mi eget ligula suscipit sollicitudin. Cras pulvinar metus eu purus sodales,
        </div>
      </div>
    </div>
  );
}

export default PageAvecCompteur;
