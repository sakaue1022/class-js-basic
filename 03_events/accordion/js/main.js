const btn = document.getElementById('btn');
const mainTitle = document.querySelector('#main-title');

btn.addEventListener('click', () => {
    mainTitle.textContent = 'クリックされました';
    mainTitle.style.color = '#ff0000';
});

window.addEventListener('scroll', () => {
    document.body.style.backgroundImage =
        `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

window.addEventListener('load', () => {
    btn.style.transform = `rotate(${window.scrollY}deg)`;

    document.body.style.backgroundImage =
        `linear-gradient(${window.scrollY}deg, #ff9a9e, #fad0c4)`;
});

window.addEventListener('resize', () => {
    windowWidth.textContent = window.innerWidth;
});

mainTitle.style.fontSize = `${window.innerWidth / 25}px`;

window.addEventListener('resize', () => {
    mainTitle.style.fontSize = `${window.innerWidth / 25}px`;
});

const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('is-open');
    navMenu.classList.toggle('is-open');
});

const accordionBtn = document.getElementById('accordion-btn');
const accordionContent = document.getElementById('accordion-content');

console.log('ボタン:', accordionBtn);
console.log('回答:', accordionContent);

if (accordionBtn && accordionContent) {
    accordionBtn.addEventListener('click', () => {
        console.log('クリックされた！');
        accordionBtn.classList.toggle('is-open');
        accordionContent.classList.toggle('is-open');
    });
}
