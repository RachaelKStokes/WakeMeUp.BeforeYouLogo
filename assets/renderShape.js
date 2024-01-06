

const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function renderShape(response) {

    if (response.shape === 'Circle') {
        let userShape = new Circle (response.logoColor, response.logoText, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Square') {
        let userShape = new Square (response.logoColor, response.logoText, response.textColor)
        return userShape.render()
    }

    if (response.shape === 'Triangle') {
        let userShape = new Triangle (response.logoColor, response.logoText, response.textColor)
        return userShape.render()
    }
};

module.exports = renderShape;