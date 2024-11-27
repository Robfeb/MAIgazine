import { articles } from './articles.js';
import { renderArticles } from './articles.js';

export function showArticleDetail(articleId) {
  const article = articles.find(a => a.id === articleId);
  if (!article) return;

  const mainContent = document.querySelector('main');
  mainContent.innerHTML = `
    <div class="article-detail">
      <div class="article-hero" style="background-image: url('${article.fullImage}')">
        <div class="article-hero-content">
          <div class="article-category">${article.category}</div>
          <h1>${article.title}</h1>
        </div>
      </div>
      
      <div class="article-detail-content">
        <div class="audio-player">
          <h3 class="audio-title">${article.audioTitle}</h3>
          <audio controls>
            <source src="${article.audio}" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
        
        <div class="article-body">
          ${article.content}
        </div>
        
        <button class="back-button" onclick="window.location.hash = ''">
          Back to Articles
        </button>
      </div>
    </div>
  `;
}

export function initializeRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);
}

function handleRoute() {
  const hash = window.location.hash;
  if (hash.startsWith('#article/')) {
    const articleId = parseInt(hash.split('/')[1]);
    showArticleDetail(articleId);
  } else {
    renderArticles();
  }
}