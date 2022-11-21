function somethingFunc(x) {
    return x * 2;
}
let a = 2;
function practiceVoid(x) {
    x += 1;
    console.log(x);
}
practiceVoid(a);
function notUseParameter(x) {
}
notUseParameter();
function question2(name) {
    if (name)
        console.log(`안녕하세요 ${name}`);
    else
        console.log('이름이 없습니다.');
}
console.log('Question 2.');
question2('대생');
question2();
function question3(x) {
    return String(x).length;
}
console.log('Question 3.');
console.log(question3(333));
console.log(question3('안녕하세요'));
function question4(income, ownHome, charmingScore) {
    let point = 0;
    point += (income / 10000);
    if (ownHome)
        point += 500;
    switch (charmingScore) {
        case '상':
            point += 100;
            break;
        default:
            point += 0;
            break;
    }
    console.log('resultPoint: ' + point);
    if (point >= 600)
        return '결혼 가능';
    else
        return '';
}
console.log('Question 4.');
let result = question4(700, false, '중');
console.log(result);
export {};
