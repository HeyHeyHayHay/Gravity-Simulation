var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var g = 1000;
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
            var dx = (this.xPosition) - (otherCelestialObject.xPosition);
            var dy = (this.yPosition) - (otherCelestialObject.yPosition);
            var rSquared = (Math.pow((dx), 2) + Math.pow((dy), 2));
            var totalAcceleration = (g * otherCelestialObject.mass) / rSquared;
            var dxSign = Math.sign(dx);
            var dySign = Math.sign(dy);
            var angle = Math.PI / 2;
            if (dx != 0) {
                angle = Math.atan(Math.abs(dy) / Math.abs(dx));
            }
            ;
            var changeInAccelerationx = -dxSign * totalAcceleration * Math.cos(angle);
            var changeInAccelerationy = -dySign * totalAcceleration * Math.sin(angle);
            this.xAcceleration += changeInAccelerationx;
            this.yAcceleration += changeInAccelerationy;
            return;
        }
        ;
    };
    ;
    celestialObject.prototype.changeAccelerationDueToAll = function () {
        this.xAcceleration = 0;
        this.yAcceleration = 0;
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
        ctx.beginPath();
        ctx.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        return;
    };
    ;
    return celestialObject;
}());
;
//create CelestialObjects
var sun = new celestialObject(100, 75, '#f1c232', canvas.width / 2, canvas.height / 2, 0, 0, 0, 0);
var earth = new celestialObject(2, 15, '#c9c9c9', canvas.width / 2, canvas.height / 4, 20, 0, 0, 0);
var mars = new celestialObject(1, 10, '#b85416', canvas.width / 2, canvas.height - (canvas.height / 5), -20, 0, 0, 0);
var mars = new celestialObject(4, 25, '#428bff', canvas.width / 9, canvas.height / 2, 0, -10, 0, 0);
// animation function
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < allInstances.length; i++) {
        allInstances[i].draw();
    }
    ;
    for (var i = 0; i < allInstances.length; i++) {
        allInstances[i].changeAccelerationDueToAll();
    }
    ;
    for (var i = 0; i < allInstances.length; i++) {
        allInstances[i].updateValues();
    }
    ;
}
;
setInterval(animate, 100);
