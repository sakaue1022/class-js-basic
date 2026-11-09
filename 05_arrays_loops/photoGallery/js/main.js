const mainImg = document.getElementById('main-img');
const captionText = document.getElementById('caption-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const thumbImgs = document.querySelectorAll('.thumb-img');

let currentIndex = 0;

function showImage(index) {

    currentIndex = index;

    const selectedImg = thumbImgs[currentIndex];

    mainImg.src = selectedImg.src;
    mainImg.alt = selectedImg.alt;

    captionText.textContent =
        `${currentIndex + 1} / ${thumbImgs.length} : ${selectedImg.alt}`;

    thumbImgs.forEach(function (img) {
        img.classList.remove('is-active');
    });

    selectedImg.classList.add('is-active');
}

thumbImgs.forEach(function (img, index) {

    img.addEventListener('click', function () {
        showImage(index);
    });

});

nextBtn.addEventListener('click', function () {

    currentIndex++;

    if (currentIndex >= thumbImgs.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);

});

prevBtn.addEventListener('click', function () {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = thumbImgs.length - 1;
    }

    showImage(currentIndex);

});
