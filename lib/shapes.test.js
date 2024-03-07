const {Shape, Triangle, Square, Circle} = require('../lib/shapes');



describe ('Shape', () => {
    describe('Instantiate', () =>{
        it('should be an instance of the Shape class', () => {
            const shape = new Shape('blue', 'green', 'SEA');
            expect(shape).toBeInstanceOf(Shape);
        });
    });

    describe('initialize shapeFill', () => {
        it('should set shapeFill properly', () =>{
            const shapeFill = 'green';
            const shape = new Shape(shapeFill,  'white', 'SEA');
            expect(shape.shapeFill).toBe(shapeFill)
        });
    });

    describe('initialize textFill', () => {
        it('should set textFill properly', () =>{
            const textFill = 'blue';
            const shape = new Shape('green', textFill, 'SEA');
            expect(shape.textFill).toBe(textFill)
        });
    });

    describe('initialize textChars', () => {
        it('should set textChars properly', () =>{
            const textChars = 'APM';
            const shape = new Shape('green', 'black', textChars);
            expect(shape.textChars).toBe(textChars)
        });
    });
});

describe('Triangle', () =>{
    describe('Instantiate', () =>{
        it('should be an instance of the Triangle class', () => {
            const triangle = new Triangle('blue', 'green', 'SEA');
        expect(triangle).toBeInstanceOf(Triangle);
        });
    });

    describe('render() method', () => {
        it('should render the SVG file for a triangle', () => {
            const triangle = new Triangle('green', 'blue', 'SEA',);
            expect(triangle.render()).toBe(
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points=""50 15, 100 100, 0 100"" fill="green" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SEA</text>
</svg>`
            )
        });
    });
});

describe('Square', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Square class', () => {
            const square = new Square('blue','white','HSR');
            expect(square).toBeInstanceOf(Square);
        });
    });

    describe('render() method', () => {
        it('should render the SVG file for a square', () => {
            const square = new Square('white', 'blue', 'HSR');
            expect(square.render()).toBe(
                `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="10" width="30" height="30" fill="white"
<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">HSR</text>
</svg>`
            )
        })
    })
});

describe('Circle', () => {
    describe('Instantiate', () => {
        it('should be an instance of the Circle class', () => {
            const circle = new Circle('pink','purple','LRM');
            expect(circle).toBeInstanceOf(Circle);
        });
    });

    describe('render() method', () => {
        it('should render the SVG file for a square', () => {
            const circle = new Circle('purple', 'pink', 'LRM');
            expect(circle.render()).toBe(
            `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="purple" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="pink">LRM</text>
</svg>`
            )
        })
    })
});