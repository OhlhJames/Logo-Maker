class Shape{
    constructor(shapeFill, textFill, textChars) {
        if(textChars.length > 3 ){
            throw new Error('Can only choose up to 3 characters for this logo')
        }
        if(textChars.length === 0){
            throw new Error('must choose at least one character for this logo')
        }
        this.textChars = textChars
        this.textFill = textFill
        this.shapeFill = shapeFill
    };
};
class Triangle extends Shape{
    constructor(shapeFill, textFill, textChars){
        super(shapeFill, textFill, textChars)
    };

    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
<polygon points="150 25, 250 150, 50 150" fill="${this.shapeFill}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.textChars}</text>
</svg>`
    };
};

class Square extends Shape{
    constructor(shapeFill, textFill, textChars){
        super(shapeFill, textFill, textChars)
    };

    render() {
        return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
<rect x="50" y="10" width="200" height="200" fill="${this.shapeFill}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.textChars}</text>
</svg>`
    };
};

class Circle extends Shape{
    constructor(shapeFill, textFill, textChars){
        super(shapeFill, textFill, textChars)
    };

    render() {
        return `<svg width="300" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeFill}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.textChars}</text>
</svg>`
    };
};

module.exports = {Shape, Triangle, Square, Circle};