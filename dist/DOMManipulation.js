"use strict";
let title = document.querySelector('#title');
let btn = document.querySelector('#button');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', function (e) {
    if (title instanceof HTMLElement) {
        title.innerHTML = '반갑소';
    }
});
if ((title === null || title === void 0 ? void 0 : title.innerHTML) != undefined) {
    title.innerHTML = '반갑습니다';
}
