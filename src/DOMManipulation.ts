let title = document.querySelector('#title');
let btn = document.querySelector('#button');

btn?.addEventListener('click', function (e) {
    if (title instanceof HTMLElement) {
        title.innerHTML = '반갑소'
    }
})

if (title?.innerHTML != undefined) {
    title.innerHTML = '반갑습니다'
}