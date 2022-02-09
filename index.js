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
]

let html = function ({ title, src, url } = {}) {
    return `
    <div class="card">
        <a href="${url}">
            <img src="./${src}/design/desktop-design.jgp" alt="${title}">
        </a>
        <div class="card-body">
            <h5 class="mb-3 card-title">${title}</h5>
            <a href="${url}">
                <button class="btn btn-info">View</button>
            </a>
        </div>
    </div>
            `
}

let row = document.querySelector('.row');

row.innerHTML = projects.map(project => {
    let card = html(project);
    console.log(card);
    return card;
}).join("")


