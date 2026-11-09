const score = '80';

if (score === 80) {
    console.log('合格!');
} else if (score >= 50) {
    console.log('もう少し!');
} else {
    console.log('不合格!');
}

const age = 16;
const hasLicense = false;

if (age >= 18 || hasLicense) {
    console.log('運転できる');
} else {
    console.log('運転できない');
}

const isMember = true; // 会員フラグ：true または false
const total = 6000; // 購入金額：数値
const btn = document.getElementById('btn');
const message = document.getElementById('message');

const countDisplay = document.getElementById('count');
let count = 0;

btn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count;

});
