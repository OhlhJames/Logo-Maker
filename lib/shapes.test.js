const Shape = require('../lib/shapes');

describe ('Shape', () => {
    describe('Instantiate', () =>{
        it('should be an instance of the Shape class', () => {
            const shape = new Shape();
            expect(shape).toBeInstanceOf(Shape)
        });
    });

    describe('initialize shapeFill', () => {
        it('should set shapeFill properly', () =>{
            const shapeFill = 'green';
            const shape = new Shape(shapeFill);
            expect(shape.shapeFill).toBe(shapeFill)
        });
    });

    describe('initialize textFill', () => {
        it('should set textFill properly', () =>{
            const textFill = 'blue';
            const shape = new Shape(textFill);
            expect(shape.textFill).toBe(textFill)
        });
    });

    describe('initialize textChars', () => {
        it('should set textChars properly', () =>{
            const textChars = 'APM';
            const shape = new Shape(textChars);
            expect(shape.textChars).toBe(textChars)
        });
    });
});