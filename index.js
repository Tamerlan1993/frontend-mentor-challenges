let projects = [
  {
    title: 'Character counter (React)',
    src: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/zbvrotjht8wmzzjjwjbd.jpg',
    url: 'https://react-text-analyze.netlify.app/',
    external: true,
  },
  {
    title: 'REST Countries API with color theme switcher (React)',
    src: 'https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/wirxeocmd6tpnn9c5oqc.jpg',
    url: 'https://react-rest-countries-demo.netlify.app',
    external: true,
  },
  {
    title: 'Product preview card component',
    src: 'product-preview-card-component-main',
    url: 'https://frontmentorchallenges.netlify.app/product-preview-card-component-main/index.html',
  },
  {
    title: 'Huddle landing page with alternating feature blocks',
    src: 'huddle-landing-page-with-alternating-feature-blocks-master',
    url: 'https://frontmentorchallenges.netlify.app/huddle-landing-page-with-alternating-feature-blocks-master/index.html',
  },
  {
    title: 'Social links profile',
    src: 'social-links-profile-main',
    url: 'https://frontmentorchallenges.netlify.app/social-links-profile-main/index.html',
  },
  {
    title: 'Recipe page',
    external: true,
    src: 'https://res.cloudinary.com/dz209s6jk/image/upload/f_auto,q_auto,w_700/Challenges/sogk9gtrzrmsf2rzcj63.jpg',
    url: 'https://frontmentorchallenges.netlify.app/recipe-page-main/index.html',
  },
  {
    title: 'Chat app CSS illustration',
    src: 'chat-app-css-illustration-master',
    url: 'https://frontmentorchallenges.netlify.app/chat-app-css-illustration-master/index.html',
  },
  {
    title: 'Clipboard landing page',
    src: 'clipboard-landing-page-master',
    url: 'https://frontmentorchallenges.netlify.app/clipboard-landing-page-master/index.html',
  },
  {
    title: 'Blog Preview Card',
    src: 'blog-preview-card-main',
    url: 'https://frontmentorchallenges.netlify.app/blog-preview-card-main/index.html',
  },
  {
    title: 'Article preview card component',
    src: 'article-preview-component-master',
    url: 'https://frontmentorchallenges.netlify.app/article-preview-component-master/index.html',
  },
  {
    title: 'Stats preview card component',
    src: 'stats-preview-card-component-main',
    url: 'https://frontmentorchallenges.netlify.app/stats-preview-card-component-main/index.html',
  },
  {
    title: 'NFT preview card component',
    src: 'nft-preview-card-component-main',
    url: 'https://frontmentorchallenges.netlify.app/nft-preview-card-component-main/index.html',
  },
  {
    title: '3-column preview card component',
    src: '3-column-preview-card-component-main',
    url: 'https://frontmentorchallenges.netlify.app/3-column-preview-card-component-main/index.html',
  },
  {
    title: 'four card feature section component',
    src: 'four-card-feature-section-master',
    url: 'https://frontmentorchallenges.netlify.app/four-card-feature-section-master/index.html',
  },
  {
    title: 'Single price grid component',
    src: 'single-price-grid-component-master',
    url: 'https://frontmentorchallenges.netlify.app/single-price-grid-component-master/index.html',
  },
  {
    title: 'Profile card component',
    src: 'profile-card-component-main',
    url: 'https://frontmentorchallenges.netlify.app/profile-card-component-main/index.html',
  },
  {
    title: 'Order summary component',
    src: 'order-summary-component-main',
    url: 'https://frontmentorchallenges.netlify.app/order-summary-component-main/index.html',
  },
  {
    title: 'Social proof section',
    src: 'social-proof-section-master',
    url: 'https://frontmentorchallenges.netlify.app/social-proof-section-master/index.html',
  },
  {
    title: 'QR code component',
    src: 'qr-code-component-main',
    url: 'https://frontmentorchallenges.netlify.app/qr-code-component-main/index.html',
  },
  {
    title: 'Huddle landing page',
    src: 'huddle-landing-page-with-single-introductory-section-master',
    url: 'https://frontmentorchallenges.netlify.app/huddle-landing-page-with-single-introductory-section-master/index.html',
  },
  {
    title: 'Advice generator app',
    src: 'advice-generator-app-main',
    url: 'https://frontmentorchallenges.netlify.app/advice-generator-app-main/index.html',
  },
  {
    title: 'Testimonials grid section',
    src: 'testimonials-grid-section-main',
    url: 'https://frontmentorchallenges.netlify.app/testimonials-grid-section-main/index.html',
  },
  {
    title: 'Base Apparel coming soon page',
    src: 'base-apparel-coming-soon-master',
    url: 'https://frontmentorchallenges.netlify.app/base-apparel-coming-soon-master/index.html',
  },
  {
    title: 'Ping coming soon page',
    src: 'ping-coming-soon-page-master',
    url: 'https://frontmentorchallenges.netlify.app/ping-coming-soon-page-master/index.html',
  },
  {
    title: 'Intro component with sign-up form',
    src: 'intro-component-with-signup-form-master',
    url: 'https://frontmentorchallenges.netlify.app/intro-component-with-signup-form-master/index.html',
  },
  {
    title: 'Results summary component',
    src: 'results-summary-component-main',
    url: 'https://frontmentorchallenges.netlify.app/results-summary-component-main/index.html',
  },
  {
    title: 'Interactive rating component',
    src: 'interactive-rating-component-main',
    url: 'https://frontmentorchallenges.netlify.app/interactive-rating-component-main/index.html',
  },
  {
    title: 'FAQ accordion card',
    src: 'faq-accordion-card-main',
    url: 'https://frontmentorchallenges.netlify.app/faq-accordion-card-main/index.html',
  },
];

let row = document.querySelector('.row');

projects.forEach((project) => {
  let card = createTag('div', 'card');

  let a = createTag('a');
  a.href = project.url;

  let img = createTag('img');
  img.src = project.external
    ? project.src
    : `./${project.src}/design/desktop-preview.jpg`;

  a.append(img);
  a.setAttribute('target', '_blank');

  let cardBody = createTag('div', 'card-body');

  let h5 = createTag('h5', 'mb-3 card-title');
  h5.textContent = project.title;

  cardBody.append(h5);
  cardBody.append(a);
  card.append(cardBody);

  row.append(card);
});

function createTag(tag, classList = '') {
  let el = document.createElement(tag);
  el.classList = classList;
  return el;
}
