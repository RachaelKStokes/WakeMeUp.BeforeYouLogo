const inquirer = require('inquirer');
const jest = require('jest');
const renderShape = require('./assets/renderShape');
const fs = require('fs');


function generateLogo(data) {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter logo text (up to three characters).',
                name: 'logoText',
                default: 'ABC',
            },
            {
                type: 'input',
                message: 'Please enter a color name for the text.',
                name: 'textColor',

            },
            {
                type: 'rawlist',
                message: 'Please select a shape:',
                choices: ['circle', 'square', 'triangle'],
                name: 'logoShape',
            },
            {
                type: 'input',
                message: 'Please enter a logo background color.',
                name: 'logoColor',
            },
        ])

        .then((data) => {
            console.log(data);
            const svg = renderShape(data);

            if (!fs.existsSync('./assets/output')) {
                fs.mkdirSync('./assets/output');
            }

            fs.writeFileSync('./assets/output/exampleLogo.svg', svg);
        });
    };

    generateLogo();