import {types} from "util";

type location = {
    readonly japan: string[]
}

const myTrips :location = {
    japan: ['okayama', 'tokyo', 'kyoto', 'hokkaido']
}
console.log(myTrips.japan); // [ 'okayama', 'tokyo', 'kyoto', 'hokkaido' ]

myTrips.japan[1] = 'osaka';
console.log(myTrips.japan); // [ 'okayama', 'osaka', 'kyoto', 'hokkaido' ]


type Book = {
    title :string,
    price :number,
    isbn :string | number,
    buyer? :string,
}

const shelf :Book = {
    title : '모던 자바스크립트 Deep Dive',
    price : 45000,
    isbn : '979-11-5839-223-9',
}


// 기본형
type SomethingOne = string;
type SomethingTwo = number;
type SomethingNew = SomethingOne | SomethingTwo; // Alias for: SomethingOne | SomethingTwo
// Initial type: string | number

// Object에서는...
type ObjTypeOne = {first: string};
type ObjTypeTwo = {second: number};
type ObjTypeSum = ObjTypeOne & ObjTypeTwo;
const obj: ObjTypeSum = {first: '첫번째임', second: 123}

// 변수형으로 만들지 않고 그냥 입력한 타입과 extend 하는것도 가능하다.
type ObjType = {first: string};
type AliasPlusNormal = ObjType & {second: number};
const obj2: AliasPlusNormal = {first: '첫번째임', second: 123};

// 섞으면...
type MixTypeOne = string | boolean;
type ObjMixTypeOne = {mixOne: string, mixTwo: number};
type SomethingNewVer1 = MixTypeOne & ObjMixTypeOne;
// const somethingTest: SomethingNewVer1 = {
//     mixOne: '123',
//     mixTwo: 123
// }

// type TestTypeOverride = string;
// type TestTypeOverride = number;


type MyType1 = {
    property1: string,
    property2: number
}

type MyType2 = {
    property3: boolean,
    property1: string
}

type TypeExtend = MyType1 & MyType2;

const TypeOverlap: TypeExtend = {
    property1 : '123', // TS2322: Type 'number' is not assignable to type 'never'.
    property2 : 123,
    property3 : true
}

type Exercise = {
    color?: string,
    size: number,
    readonly position: number[]
}

const myExercise: Exercise = {
    size : 100,
    position : [1,2,3,4,5]
}
// myExercise.position = [2,3,4,5,6];

type PersonalInfoType = {
    name: string,
    phone?: string | number,
    email: string
}

const personalInfo: PersonalInfoType = {
    name : 'Lee',
    phone : '010-7580-7057',
    email : 'example@example.com'
}

type PersonalInfoTypePlus = {
    minors?: boolean
}

type ExtendPersonalInfoType = PersonalInfoType & PersonalInfoTypePlus

const someOne: ExtendPersonalInfoType = {
    name : 'Lee',
    phone : '010-7580-7057',
    email : 'example@example.com',
    minors : false,
}