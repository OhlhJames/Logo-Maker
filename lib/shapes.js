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
        this.shapefill = shapefill
    }
}
module.exports = Shape