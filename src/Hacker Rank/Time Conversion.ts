function timeConversion(s: string): string {
    const copy = s.split('');

    let hour = copy.slice(0, 2).join('');
    let ampm = copy.slice(-2).join('');
    let delHourTime = copy.slice(2, 8).join('');

    const convertHour = (hour: string, ampm: string): string => {
        if (hour === '12' && ampm === 'PM') return hour;
        else if (hour === '12' && ampm === 'AM') return String(Number(hour) - 12) + '0';
        else if (ampm === 'PM') return String(Number(hour) + 12)
        else return hour;
    };

    return convertHour(hour, ampm).split('').concat(delHourTime).join('')
}

console.log(timeConversion('04:59:59AM'));


// function timeConversion(s: string): string {
//     let ampm = s.split('').splice(-2, 3).join(''); // AM / PM 값
//     let hour = Number(s.split('').splice(0, 2).join('')); // 시간
//     if (hour < 12 && ampm === 'PM') {
//         hour += 12;
//     } else if (hour === 12 && ampm === 'AM') {
//         hour -= 12;
//     }
//     const hourArr = hour.toString().split('');
//     if (hourArr.length === 1) hourArr.unshift('0'); // 숫자변환시 00이 0으로 변환되는 경우
//
//     let remains: string[] = []; // hour, AM/PM 이외 부분
//     for (let i = 2; i < s.length - 2; i++) {
//         remains.push(s[i]);
//     }
//     return hourArr.concat(remains).join('');
// }
//
// const myResult: string = timeConversion('06:40:03AM');
// console.log(myResult);
//
// export {}