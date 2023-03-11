var celestialObject = /** @class */ (function () {
    function celestialObject(mass, size, xPosition, yPosition, initialxVelocity, initialyVelocity, intialxAcceleration, intialyAcceleration) {
        if (intialxAcceleration === void 0) { intialxAcceleration = 0; }
        if (intialyAcceleration === void 0) { intialyAcceleration = 0; }
        this.intialxAcceleration = 0;
        this.intialyAcceleration = 0;
        this.mass = mass;
        this.size = size;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.initialxVelocity = initialxVelocity;
        this.initialyVelocity = initialyVelocity;
        this.intialxAcceleration = intialxAcceleration;
        this.intialyAcceleration = intialyAcceleration;
    }
    return celestialObject;
}());
var sun = new celestialObject(100, 50, 0, 0, 0, 0, 0, 0);
console.log(sun.mass);
console.log(sun.initialxVelocity);
