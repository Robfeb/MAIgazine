import { initHeader } from './src/js/header.js';
import { renderArticles, articles } from './src/js/articles.js';
import { initializeRouter, showArticleDetail } from './src/js/articleDetail.js';

// Initialize components
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initializeRouter();
  
  // Add logo click handler
  document.querySelector('.logo').addEventListener('click', () => {
    window.location.hash = '';
  });
});