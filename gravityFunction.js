var g = 10000;
var allInstances = [];
var celestialObject = /** @class */ (function () {
    function celestialObject(mass, radius, color, initialxPosition, initialyPosition, initialxVelocity, initialyVelocity, intialxAcceleration, intialyAcceleration) {
        if (intialxAcceleration === void 0) { intialxAcceleration = 0; }
        if (intialyAcceleration === void 0) { intialyAcceleration = 0; }
        this.mass = mass;
        this.radius = radius;
        this.color = color;
        this.xPosition = initialxPosition;
        this.yPosition = initialyPosition;
        this.xVelocity = initialxVelocity;
        this.yVelocity = initialyVelocity;
        this.xAcceleration = intialxAcceleration;
        this.yAcceleration = intialyAcceleration;
        allInstances.push(this);
    }
    ;
    celestialObject.prototype.changeAccelerationDueTo = function (otherCelestialObject) {
        if (otherCelestialObject == this) {
            return;
        }
        else {
            var dx = this.xPosition - otherCelestialObject.xPosition;
            var dy = this.yPosition - otherCelestialObject.yPosition;
            var rSquared = Math.pow(dx, 2) + Math.pow(dy, 2);
            var totalAcceleration = (g * otherCelestialObject.mass) / rSquared;
            var dxSign = Math.sign(dx);
            var dySign = Math.sign(dy);
            var angle = Math.PI / 2;
            if (dx != 0) {
                angle = Math.atan(Math.abs(dy) / Math.abs(dx));
            }
            ;
            var changeInAccelerationx = -dxSign * totalAcceleration * Math.sin(angle);
            var changeInAccelerationy = -dySign * totalAcceleration * Math.cos(angle);
            this.xAcceleration += changeInAccelerationx;
            this.yAcceleration += changeInAccelerationy;
            return;
        }
        ;
    };
    ;
    celestialObject.prototype.changeAccelerationDueToAll = function () {
        for (var i = 0; i < allInstances.length; i++) {
            this.changeAccelerationDueTo(allInstances[i]);
        }
        ;
    };
    ;
    celestialObject.prototype.updateValues = function () {
        this.xVelocity += this.xAcceleration;
        this.yVelocity += this.yAcceleration;
        this.xPosition += this.xVelocity;
        this.yPosition += this.yVelocity;
        return;
    };
    ;
    celestialObject.prototype.draw = function () {
        //ctx.beginPath();
        //ctx.arc(xPosition, yPosition, radius, 0, 2 * Math.PI, false);
        //ctx.lineWidth = 0;
        //ctx.fillStyle = color;
        //ctx.fill();
        //ctx.closePath();
        return;
    };
    ;
    return celestialObject;
}());
;
var sun = new celestialObject(100, 50, '#f1c232', 0, 0, 0, 0, 0, 0);
var moon = new celestialObject(1, 5, '#c9c9c9', 100, 100, 20, 0, 0, 0);
moon.changeAccelerationDueTo(moon);
moon.changeAccelerationDueToAll();
console.log(allInstances);
