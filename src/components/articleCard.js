import React, { useState, useEffect } from 'react';

function ArticleCard() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('./articles.json')
      .then(response => response.json())
      .then(data => setArticles(data.articles[0]));
  }, []);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <p>Nom: {article.title}</p>
            <p>Âge: {article.description}</p>
            <p>Ville: {article.ville}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleCard;
