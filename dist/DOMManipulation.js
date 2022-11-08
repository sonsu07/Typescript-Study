"use strict";
let vueImg = document.querySelector('#vue-img');
let btn = document.querySelector('#button');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', (e) => {
    if (vueImg instanceof HTMLImageElement) {
        vueImg.src = './img/react.webp';
    }
});
let naver = document.querySelectorAll('.naver');
naver.forEach((item, idx) => {
    if (item instanceof HTMLAnchorElement) {
        item.href = 'https://kakao.com';
    }
});
