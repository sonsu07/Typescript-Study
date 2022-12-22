function timeConversion(s: string): string {
    let ampm = s.split('').splice(-2, 3).join(''); // AM / PM 값
    let hour = Number(s.split('').splice(0, 2).join('')); // 시간
    if (hour < 12 && ampm === 'PM') {
        hour += 12;
    } else if (hour === 12 && ampm === 'AM') {
        hour -= 12;
    }
    const hourArr = hour.toString().split('');
    if (hourArr.length === 1) hourArr.unshift('0'); // 숫자변환시 00이 0으로 변환되는 경우

    let remains: string[] = []; // hour, AM/PM 이외 부분
    for (let i = 2; i < s.length - 2; i++) {
        remains.push(s[i]);
    }
    return hourArr.concat(remains).join('');
}

const myResult: string = timeConversion('06:40:03AM');
console.log(myResult);