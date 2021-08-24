// Room Constructor and prototypes here
const Room = function (area, painted) {
    this.area = area
    this.painted = false
}
 
Room.prototype.canBePainted = function () {
    this.painted = true
}





module.exports = Room;
