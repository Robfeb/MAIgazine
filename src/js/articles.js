export const articles = [
  {
    id: 1,
    title: "The Future of Sustainable Fashion",
    category: "Fashion",
    excerpt: "Exploring how sustainable practices are reshaping the fashion industry...",
    image: "https://source.unsplash.com/random/800x600?fashion",
    fullImage: "https://source.unsplash.com/random/1920x1080?fashion",
    content: `
      <p>The fashion industry is undergoing a revolutionary transformation as sustainability takes center stage. From innovative recycling techniques to eco-friendly materials, brands are reimagining their approach to style.</p>
      <p>Leading designers are now incorporating organic materials and implementing zero-waste policies in their production processes. This shift represents more than just a trend—it's a fundamental change in how we think about clothing.</p>
    `,
    audio: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c2c11050.mp3",
    audioTitle: "Sustainable Fashion Podcast Episode"
  },
  {
    id: 2,
    title: "Culinary Adventures: Street Food Revolution",
    category: "Food",
    excerpt: "Discovering how street food is influencing modern gastronomy...",
    image: "https://source.unsplash.com/random/800x600?food",
    fullImage: "https://source.unsplash.com/random/1920x1080?food",
    content: `
      <p>Street food has emerged from the shadows to become a driving force in culinary innovation. From food trucks to pop-up markets, these mobile kitchens are redefining our relationship with food.</p>
      <p>Chefs are drawing inspiration from street vendors, incorporating their techniques and flavors into high-end dining experiences. This fusion of street and fine dining is creating exciting new possibilities in the culinary world.</p>
    `,
    audio: "https://cdn.pixabay.com/download/audio/2022/03/10/audio_2dde668d05.mp3",
    audioTitle: "Street Food Stories"
  },
  {
    id: 3,
    title: "Digital Art in the Modern Era",
    category: "Art & Culture",
    excerpt: "How digital technologies are transforming artistic expression...",
    image: "https://source.unsplash.com/random/800x600?art",
    fullImage: "https://source.unsplash.com/random/1920x1080?art",
    content: `
      <p>Digital technology has revolutionized the art world, giving birth to entirely new forms of creative expression. Artists are pushing boundaries with AI, virtual reality, and interactive installations.</p>
      <p>The democratization of art through digital platforms has opened up new possibilities for artists and audiences alike, challenging traditional notions of creativity and ownership.</p>
    `,
    audio: "https://cdn.pixabay.com/download/audio/2022/02/22/audio_c8b0d57203.mp3",
    audioTitle: "Digital Art Discussion"
  }
];

export function renderArticles() {
  const articlesContainer = document.querySelector('.articles');
  articlesContainer.innerHTML = ''; // Clear existing content
  
  articles.forEach(article => {
    const articleElement = document.createElement('div');
    articleElement.className = 'article-card';
    articleElement.innerHTML = `
      <img src="${article.image}" alt="${article.title}" class="article-image">
      <div class="article-content">
        <div class="article-category">${article.category}</div>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
      </div>
    `;
    
    articleElement.addEventListener('click', () => {
      window.location.hash = `article/${article.id}`;
    });
    
    articlesContainer.appendChild(articleElement);
  });
}