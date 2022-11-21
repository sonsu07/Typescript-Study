"use strict";
class BookProps {
    constructor(title, price, isbn) {
        this.title = title;
        this.price = price;
        this.isbn = isbn;
    }
}
class Book extends BookProps {
    printTitle() {
        console.log(`title: ${this.title}`);
    }
    printPrice() {
        console.log(`price: ${this.price}`);
    }
    printISBN() {
        console.log(`ISBN: ${this.isbn}`);
    }
}
const modernJSDeepDive = new Book('Modern Javascript DeepDive', 45000, 9791158392239);
modernJSDeepDive.printTitle();
modernJSDeepDive.printPrice();
modernJSDeepDive.printISBN();
