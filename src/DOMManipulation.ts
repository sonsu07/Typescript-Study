// let title = document.querySelector('#title');
// let btn = document.querySelector('#button');
//
// btn?.addEventListener('click', function (e) {
//     if (title instanceof HTMLElement) {
//         title.innerHTML = '반갑소'
//     }
// })

// if (title?.innerHTML != undefined) {
//     title.innerHTML = '반갑습니다'
// }




/**
 * Q1. 버튼 클릭시 이미지 교체
 */
let vueImg = document.querySelector('#vue-img');
let btn = document.querySelector('#button');
btn?.addEventListener('click', (e) => {
    if (vueImg instanceof HTMLImageElement) {
        vueImg.src = './img/react.webp';
    }
})

/**
 * Q2. 바꾸고 싶은 html 요소가 많은 상황
 * <a class="naver" href="http://www.naver.com">링크</a>
 * <a class="naver" href="http://www.naver.com">링크</a>
 * <a class="naver" href="http://www.naver.com">링크</a>
 *
 * 3개의 링크가 있는데 이 요소들의 href 속성을 전부 https://kakao.com으로 바꾸려면?
 */
let naver = document.querySelectorAll('.naver');
naver.forEach((item, idx) => {
    if (item instanceof HTMLAnchorElement) {
        item.href = 'https://kakao.com'
    }
})


