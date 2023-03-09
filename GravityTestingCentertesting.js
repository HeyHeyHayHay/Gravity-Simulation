const g = 1;


let xS = 10;
let yS = 10;

    const solarMass = 10;

    let xM = 10;
    let yM = 2;
    const moonMass = 10;

    let vxM = 25;
    let vxS = 0;
    let vyM = 0;
    let vyS = 0;

    let axM = 0;
    let axS = 0;
    let ayM = 0;
    let ayS = 0;


    function gravityAcceleration(Mx,My,Sx,Sy, zeroForMoon, zeroForX) {

      const rSquared = ((Mx-Sx)^2+(Mx-Sy)^2);
      console.log(rSquared)
      console.log(zeroForMoon = 0)

    }






console.log(gravityAcceleration(xM,yM,xS,yS,0,0))
console.log(gravityAcceleration(xM,yM,xS,yS,0,1))
console.log(gravityAcceleration(xM,yM,xS,yS,1,0))
console.log(gravityAcceleration(xM,yM,xS,yS,1,1))
