const inquirer = require('inquirer');
const {Triangle, Square, Circle} = require('./lib/shapes');
const fs = require('fs');
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
    .then((res) => {
        if(res.shape === 'triangle'){
            const logo = new Triangle(
                res.shapeFill, 
                res.textFill, 
                res.textChars,
                )
            fs.appendFile('logo.svg', logo.render(), (err) => 
                err ? console.error(err) : console.log('Logo created!')
            )
        } else if(res.shape = 'square'){
            const logo = new Square(
                res.shapeFill, 
                res.textFill, 
                res.textChars,
                )
            fs.appendFile('logo.svg', logo.render(), (err) => 
                err ? console.error(err) : console.log('Logo created!')
            )
        } else if (res.shape = 'circle'){
            const logo = new Circle(
                res.shapeFill, 
                res.textFill, 
                res.textChars,
                )
            fs.appendFile('logo.svg', logo.render(), (err) => 
                err ? console.error(err) : console.log('Logo created!')
            )
        }
        
    })
