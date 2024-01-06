
const Shape = require('./shape.js');

//child of Shape, Square
class Square extends Shape {
    constructor(logoColor, logoText, textColor) {
        super(logoColor, logoText, textColor);
    };
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="${this.logoColor}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg>
        `
    };
};

module.exports = Square;