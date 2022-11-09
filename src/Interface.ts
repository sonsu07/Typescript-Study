// interface
interface BookInterfaceType {
    title: string,
    price: number,
    isbn: string | number
}

interface AddBookInterfaceType extends BookInterfaceType {
    company?: string
}

const ModernJavascriptDeepDiveInterface: AddBookInterfaceType = {
    title: 'Modern Javascript DeepDive',
    price: 45000,
    isbn: '979-11-5839-223-9',
    company: '위키북스'
}

// type
type BookType = {
    title: string,
    price: number,
    isbn: string | number
}
type BookCompany = {
    company?: string
}

// type AddBookType = BookType & {company?: string}
type AddBookType = BookType & BookCompany

const ModernJavascriptDeepDiveType: AddBookType = {
    title: 'Modern Javascript DeepDive',
    price: 45000,
    isbn: '979-11-5839-223-9',
    company: '위키북스'
}


/**
 * Q1. interface 이용해서 간단하게 타입을 만들면?
 */
// let product = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface ProductType {
    brand: string,
    serialNumber: number,
    model: string[]
}

const product: ProductType = {
    brand: 'Samsung',
    serialNumber: 1360,
    model: ['TV', 'phone']
}

/**
 * Q2. array 안에 object 여러개가 필요한 상황
 * 쇼핑몰 장바구니를 구현하려고 하는데
 * let cart = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
 * 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정하나?
 */
interface CartInterface {
    product: string,
    price: number
}
const cart: CartInterface[] = [
    { product : '청소기', price : 7000 },
    { product : '삼다수', price : 800 }
]

/**
 * Q3. **위에서 만든 타입을 extends 해봅시다.**
 * 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
 * { product : '청소기', price : 7000, card : false }
 * 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
 */
interface UpdateCart extends CartInterface {
    card?: boolean
}
const updateCart: UpdateCart[] = [
    { product : '청소기', price : 7000 },
    { product : '삼다수', price : 800 },
    { product : '청소기', price : 7000, card : false }
]


/**
 * Q4. object 안에 함수를 2개 넣고 싶은데요
 * 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
 * 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
 * 이 object 자료를 어떻게 만들면 될까요?
 * interface를 이용해서 object에 타입지정도 해보십시오.
 */

interface MyObjInterface {
    plus(a: number, b: number): number,
    minus(a: number, b: number): number,

    // plus : (a:number, b:number) => number,
    // minus : (a:number, b:number) => number
}

const myObj: MyObjInterface = {
    plus(a,b) {
        return a + b
    },
    minus(a, b) {
        return a - b
    }
}