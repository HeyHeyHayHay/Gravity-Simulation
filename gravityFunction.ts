
const g = 10000;
const allInstances = [];

class celestialObject {
  mass: number;
  radius: number;
  color: string;
  xPosition: number;
  yPosition: number;
  xVelocity: number;
  yVelocity: number;
  xAcceleration: number;
  yAcceleration: number;

  constructor(mass: number, radius: number, color: string, initialxPosition: number, initialyPosition: number, initialxVelocity: number, initialyVelocity: number, intialxAcceleration = 0, intialyAcceleration = 0) {
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
  };

  changeAccelerationDueTo(otherCelestialObject: celestialObject) {

    if (otherCelestialObject == this){
      return;
    } else {
      const dx = this.xPosition - otherCelestialObject.xPosition;
      const dy = this.yPosition - otherCelestialObject.yPosition;

      const rSquared = dx**2 + dy**2
      const totalAcceleration = (g*otherCelestialObject.mass)/rSquared

      const dxSign = Math.sign(dx);
      const dySign = Math.sign(dy);

      let angle = Math.PI / 2;

      if (dx != 0){
        angle = Math.atan(Math.abs(dy)/Math.abs(dx));
      };

      const changeInAccelerationx = -dxSign*totalAcceleration*Math.sin(angle);
      const changeInAccelerationy = -dySign*totalAcceleration*Math.cos(angle);

      this.xAcceleration += changeInAccelerationx;
      this.yAcceleration += changeInAccelerationy;
      return;
    };
  };

  changeAccelerationDueToAll(){
    for (var i = 0; i < allInstances.length; i++){
      this.changeAccelerationDueTo(allInstances[i]);
    };
  };

  updateValues(){
    this.xVelocity += this.xAcceleration;
    this.yVelocity += this.yAcceleration;
    this.xPosition += this.xVelocity;
    this.yPosition += this.yVelocity;
    return;
  };

  draw(){
    //ctx.beginPath();
    //ctx.arc(xPosition, yPosition, radius, 0, 2 * Math.PI, false);
    //ctx.lineWidth = 0;
    //ctx.fillStyle = color;
    //ctx.fill();
    //ctx.closePath();
    return;
  };

};


const sun = new celestialObject(100,50,'#f1c232',0,0,0,0,0,0);
const moon = new celestialObject(1,5,'#c9c9c9',100,100,20,0,0,0);

moon.changeAccelerationDueTo(moon);

moon.changeAccelerationDueToAll();

console.log(allInstances)
