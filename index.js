const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
const { writeFile } = require('fs/promises');
inquirer
    .prompt([
        {
            type: 'list',
            message: 'What kind of Shape would you like?',
            name: 'shape',
            choices: ['circle', 'triangle', 'square' ],
        },
        {
            type: 'input',
            message: 'What color would you like this shape to be?',
            name: 'shapeFill'
        },
        {
            type: 'input',
            message: 'please input 3 letters for your logo',
            name: 'textChars',
        },
        {
            type: 'input',
            message: 'What color would you like the text to be?',
            name: 'textFill'
        }
    ])
