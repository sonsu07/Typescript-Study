class Square {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        let random = Math.random();
        let square = `
                    <div style="position:relative; 
                          top: ${random * 400}px; 
                          left: ${random * 400}px; 
                          width: ${this.width}px; 
                          height: ${this.height}px; 
                          background: ${this.color}">
                    </div>
                    `;
        document.body.insertAdjacentHTML('beforeend', square);
    }
}
const mySquare = new Square(30, 30, 'red');
mySquare.draw();
mySquare.draw();
mySquare.draw();
mySquare.draw();
export {};
