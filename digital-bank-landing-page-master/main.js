const btn = document.getElementById('hamburger-btn');
const menu = document.getElementById('mobile-menu');
const overlay = document.getElementById('mobile-overlay');
const iconEl = document.getElementById('hamburger-icon');

// Get all focusable elements inside the menu for the trap
const menuLinks = menu.querySelectorAll('a');
const firstFocusable = menuLinks[0];
const lastFocusable = menuLinks[menuLinks.length - 1];

function openMenu() {
    menu.classList.add('is-open');
    overlay.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
    iconEl.src = './images/icon-close.svg';
    document.body.style.overflow = 'hidden';

    // 1. Move focus to the first item in the menu
    // Small timeout ensures the transition/display change has begun
    setTimeout(() => firstFocusable.focus(), 100);
}

function closeMenu() {
    if (!menu.classList.contains('is-open')) return;

    menu.classList.remove('is-open');
    overlay.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    iconEl.src = './images/icon-hamburger.svg';
    document.body.style.overflow = '';

    // 2. Return focus to the trigger button so the user isn't lost
    btn.focus();
}

btn.addEventListener('click', () => {
    menu.classList.contains('is-open') ? closeMenu() : openMenu();
});

overlay.addEventListener('click', closeMenu);

menuLinks.forEach(a => a.addEventListener('click', closeMenu));

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();

    // 3. Focus Trap Logic
    if (menu.classList.contains('is-open') && e.key === 'Tab') {
        if (e.shiftKey) { // Shift + Tab
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                e.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                e.preventDefault();
            }
        }
    }
});