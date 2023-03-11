class celestialObject {
  mass: number;
  size: number;
  xPosition: number;
  yPosition: number;
  initialxVelocity: number;
  initialyVelocity: number;
  intialxAcceleration = 0;
  intialyAcceleration = 0;

  constructor(mass: number, size: number, xPosition: number, yPosition: number, initialxVelocity: number, initialyVelocity: number, intialxAcceleration = 0, intialyAcceleration = 0) {
    this.mass = mass;
    this.size = size;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.initialxVelocity = initialxVelocity;
    this.initialyVelocity = initialyVelocity;
    this.intialxAcceleration = intialxAcceleration;
    this.intialyAcceleration = intialyAcceleration;
  }
}


const sun = new celestialObject(100,50,0,0,0,0,0,0);


console.log(sun.mass)

console.log(sun.initialxVelocity)
