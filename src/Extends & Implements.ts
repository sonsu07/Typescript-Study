class BookProps {
    title: string;
    price: number;
    isbn: number;
    constructor(title: string, price: number, isbn: number) {
        this.title = title;
        this.price = price;
        this.isbn = isbn;
    }
}

interface BookInterface {
    printTitle(): void;
    printPrice(): void;
    printISBN(): void;
}

class Book extends BookProps implements BookInterface{
    printTitle() {
        console.log(`title: ${this.title}`)
    }
    printPrice() {
        console.log(`price: ${this.price}`)
    }
    printISBN() {
        console.log(`ISBN: ${this.isbn}`)
    }
}


const modernJSDeepDive = new Book('Modern Javascript DeepDive', 45000, 9791158392239);
modernJSDeepDive.printTitle();
modernJSDeepDive.printPrice();
modernJSDeepDive.printISBN();