

const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');

function renderShape(data) {

    if (data.logoShape === 'circle') {
        let userShape = new Circle (data.logoColor, data.logoText, data.textColor)
        return userShape.render()
    }

    if (data.logoShape === 'square') {
        let userShape = new Square (data.logoColor, data.logoText, data.textColor)
        return userShape.render()
    }

    if (data.logoShape === 'triangle') {
        let userShape = new Triangle (data.logoColor, data.logoText, data.textColor)
        return userShape.render()
    }
};

module.exports = renderShape;