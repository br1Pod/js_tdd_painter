// Paint Can Constructor and prototypes here
const PaintCan = function (volume) {
    this.volume = volume
}

PaintCan.prototype.checkIfEmpty = function (){
    if (this.volume === 0) {
        return "This can is empty"
    } else {
        return "You have paint... get to it"
    }
}

PaintCan.prototype.emptySelf = function (){
    this.volume = 0
}


module.exports = PaintCan;
