// Q1. 이름, 나이, 출생지역을 변수로 각각 저장
const name: string = 'Lee SungSu'; // name 변수명은 DOM에서 사용하는 놈이라, 별도로 사용해주려면 네임스페이스를 지정해주어야 한다.
const age: number = 28;
const born: string = 'Busan';

// Q2. 가장 좋아하는 곡과 가수 이름을 object 자료형으로 저장
type Artist = {
    [key: string] : string
}
const myArtist: Artist = {
    title: "BirdMan",
    artist: "피타입",
}

// Q3. 다음 object의 타입을 지정해보아라
/*
 * let project = {
 *   member : ['kim', 'park'],
 *   days : 30,
 *   started : true,
 * }
 */
type myProject = {
    member: string[],
    days: number,
    started: boolean
}

let project: myProject = {
    member : ['kim', 'park'],
    days : 30,
    started : true,
}


export {}
