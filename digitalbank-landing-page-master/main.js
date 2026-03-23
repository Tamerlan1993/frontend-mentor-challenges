const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('mobile-overlay');
const iconEl = document.getElementById('hamburger-icon');

function openMenu() {
    menu.classList.add('is-open');
    overlay.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
    iconEl.src = './images/icon-close.svg';
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    iconEl.src = './images/icon-hamburger.svg';
    document.body.style.overflow = '';
}

btn.addEventListener('click', () => {
    menu.classList.contains('is-open') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);

menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
});