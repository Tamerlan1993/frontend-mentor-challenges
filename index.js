let projects = [
    {
        title: "Stats preview card component",
        src: "stats-preview-card-component-main",
        url: "https://frontmentorchallenges.netlify.app/stats-preview-card-component-main/index.html"
    },
    {
        title: "NFT preview card component",
        src: "nft-preview-card-component-main",
        url: "https://frontmentorchallenges.netlify.app/nft-preview-card-component-main/index.html"
    },
    {
        title: "3-column preview card component",
        src: "3-column-preview-card-component-main",
        url: "https://frontmentorchallenges.netlify.app/3-column-preview-card-component-main/index.html"
    },
    {
        title: "four card feature section component",
        src: "four-card-feature-section-master",
        url: "https://frontmentorchallenges.netlify.app/four-card-feature-section-master/index.html"
    },
    {
        title: "Single price grid component",
        src: "single-price-grid-component-master",
        url: "https://frontmentorchallenges.netlify.app/single-price-grid-component-master/index.html"
    },
    {
        title: "Profile card component",
        src: "profile-card-component-main",
        url: "https://frontmentorchallenges.netlify.app/profile-card-component-main/index.html"
    },
    {
        title: "Order summary component",
        src: "order-summary-component-main",
        url: "https://frontmentorchallenges.netlify.app/order-summary-component-main/index.html"
    },
    {
        title: "Social proof section",
        src: "social-proof-section-master",
        url: "https://frontmentorchallenges.netlify.app/social-proof-section-master/index.html"
    },
    {
        title: "QR code component",
        src: "qr-code-component-main",
        url: "https://frontmentorchallenges.netlify.app/qr-code-component-main/index.html"
    },
    {
        title: "Huddle landing page",
        src: "huddle-landing-page-with-single-introductory-section-master",
        url: "https://frontmentorchallenges.netlify.app/huddle-landing-page-with-single-introductory-section-master/index.html"
    },
    {
        title: "Advice generator app",
        src: "advice-generator-app-main",
        url: "https://frontmentorchallenges.netlify.app/advice-generator-app-main/index.html"
    },
    {
        title: "Testimonials grid section",
        src: "testimonials-grid-section-main",
        url: "https://frontmentorchallenges.netlify.app/testimonials-grid-section-main/index.html"
    },
    {
        title: "Base Apparel coming soon page",
        src: "base-apparel-coming-soon-master",
        url: "https://frontmentorchallenges.netlify.app/base-apparel-coming-soon-master/index.html"
    },
    {
        title: "Ping coming soon page",
        src: "ping-coming-soon-page-master",
        url: "https://frontmentorchallenges.netlify.app/ping-coming-soon-page-master/index.html"
    },
    {
        title: "Intro component with sign-up form",
        src: "intro-component-with-signup-form-master",
        url: "https://frontmentorchallenges.netlify.app/intro-component-with-signup-form-master/index.html"
    },
]

let html = function ({ title, src, url } = {}) {
    return `
    <div class="card">
        <a href="${url}">
            <img src="./${src}/design/desktop-design.jgp" alt="${title}">
        </a>
        <div class="card-body">
            <h5 class="mb-3 card-title">${title}</h5>
            <a href="${url}" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-info">View</button>
            </a>
        </div>
    </div>
            `
}

let row = document.querySelector('.row');

projects.forEach(project => {
    let card = createTag('div', 'card');

    let a = createTag('a');
    a.href = project.url;

    let img = createTag('img');
    img.src = `./${project.src}/design/desktop-preview.jpg`;

    a.append(img)

    let cardBody = createTag('div', 'card-body');

    let h5 = createTag('h5', 'mb-3 card-title');
    h5.textContent = project.title;

    let view = createTag('a');
    view.href = project.url;
    view.innerHTML = '<button class="btn btn-info">View</button>'
    cardBody.append(h5, view)

    card.append(a, cardBody);

    row.append(card);
});


function createTag(tag, classList = '') {
    let el = document.createElement(tag)
    el.classList = classList;
    return el;
}

