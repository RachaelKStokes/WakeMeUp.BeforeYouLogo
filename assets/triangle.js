
const Shape = require('./shape.js');


//child of Shape, Triangle

class Triangle extends Shape {
    constructor(logoColor, logoText, textColor) {
        super(logoColor, logoText, textColor);  
    };
    render() {
        return `<svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="${this.logoColor}"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>
        </svg> `
    };
};

module.exports = Triangle;