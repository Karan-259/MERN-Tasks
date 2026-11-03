
document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    menuButton.textContent = open ? '×' : '☰';
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    menuButton.textContent = '☰';
}));
// Remember the selected theme when browser storage is available.
const themeButton = document.getElementById('theme-toggle');
try { if (localStorage.getItem('portfolio-theme') === 'dark') document.body.classList.add('dark'); } catch (error) { /* Storage is optional. */ }
function updateThemeButton() {
    const dark = document.body.classList.contains('dark');
    themeButton.textContent = dark ? '☀' : '☾';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
}
updateThemeButton();
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    try { localStorage.setItem('portfolio-theme', document.body.classList.contains('dark') ? 'dark' : 'light'); } catch (error) { /* Theme still works without storage. */ }
    updateThemeButton();
});
// Demo only: connect a backend to deliver submitted messages.
document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const name = new FormData(event.currentTarget).get('name').trim();
    alert(`Thanks, ${name}! Your message is ready to send. This demo form is not connected to a server yet.`);
    event.currentTarget.reset();
});