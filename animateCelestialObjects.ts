
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const g = 1000;
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

      const dx = (this.xPosition) - (otherCelestialObject.xPosition);
      const dy = (this.yPosition) - (otherCelestialObject.yPosition);

      const rSquared = ((dx)**2 + (dy)**2);
      const totalAcceleration = (g*otherCelestialObject.mass)/rSquared

      const dxSign = Math.sign(dx);
      const dySign = Math.sign(dy);

      let angle = Math.PI / 2;

      if (dx != 0){
        angle = Math.atan(Math.abs(dy)/Math.abs(dx));
      };

      const changeInAccelerationx = -dxSign*totalAcceleration*Math.cos(angle);
      const changeInAccelerationy = -dySign*totalAcceleration*Math.sin(angle);


      this.xAcceleration += changeInAccelerationx;
      this.yAcceleration += changeInAccelerationy;
      return;
    };
  };

  changeAccelerationDueToAll(){
    this.xAcceleration = 0;
    this.yAcceleration = 0;
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
    ctx.beginPath();
    ctx.arc(this.xPosition, this.yPosition, this.radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = 3;
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    return;
  };

};

//create CelestialObjects

const sun = new celestialObject(100,75,'#f1c232',canvas.width / 2, canvas.height / 2,0,0,0,0);
const earth = new celestialObject(2,15,'#c9c9c9',canvas.width / 2, canvas.height / 4,20,0,0,0);
const mars = new celestialObject(1,10,'#b85416',canvas.width / 2, canvas.height - (canvas.height / 5),-20,0,0,0);
const mars = new celestialObject(4,25,'#428bff',canvas.width / 9, canvas.height / 2,0,-10,0,0);



// animation function

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < allInstances.length; i++){
    allInstances[i].draw();
  };
  for (var i = 0; i < allInstances.length; i++){
    allInstances[i].changeAccelerationDueToAll();
  };
  for (var i = 0; i < allInstances.length; i++){
    allInstances[i].updateValues();
  };
};

setInterval(animate, 100);
