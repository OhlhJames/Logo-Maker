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
            const triangle = new Triangle(
                'green',
                'blue',
                'SEA',
            );
            expect(triangle.render()).toBe(
                `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points=""50 15, 100 100, 0 100"" fill="green" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SEA</text>
        </svg>`
            )
        });
    });
});