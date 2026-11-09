const colorBtns = document.querySelectorAll('.color-btn');

for (let i = 0; i < colorBtns.length; i++) {
    colorBtns[i].addEventListener('click', () => {
        console.log(colorBtns[i].className);
    });
}

const Links = document.querySelectorAll('a[href^="http"]');
console.log(Links);
for (let i = 0; i < Links.length; i++) {
    Links[i].setAttribute('target', '_blank');
    links[i].setAttribute('rel', 'noopener noreferrer');
    links[i].textContent += '↗︎';
}
