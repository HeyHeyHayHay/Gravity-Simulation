const g = 1000000;


let xS = 700;
let yS = 500;

    const solarMass = 100;

    let xM = 200;
    let yM = 100;
    const moonMass = 1;

    let vxM = 25;
    let vxS = 0;
    let vyM = 0;
    let vyS = 0;

    let axM = 0;
    let axS = 0;
    let ayM = 0;
    let ayS = 0;


    function gravityAcceleration(Mx,My,Sx,Sy,moon,xcoord) {

      const rSquared = ((Mx-Sx)**2+(My-Sy)**2);

      if (moon) {

        const totalAcceleration = (g*solarMass)/rSquared;
        const dx = Mx-Sx;
        const dy = My-Sy;
        const signdx = Math.sign(dx);
        const signdy = Math.sign(dy);

        let angle = 0;

        if (dy == 0) {
          angle = Math.PI / 2;
        } else {
          angle = Math.atan(Math.abs(dx)/Math.abs(dy));
          console.log(dx)
          console.log(dy)
          console.log(Math.abs(dx)/Math.abs(dy))
          console.log(Math.atan(Math.abs(dx)/Math.abs(dy)))
          console.log(angle)
        }

        if (xcoord) {
          let axM = -signdx*totalAcceleration*Math.sin(angle);

          return axM;
        } else {
          let ayM = -signdy*totalAcceleration*Math.cos(angle);
          return ayM;
        }


      } else {

        const totalAcceleration = (g*moonMass)/rSquared;

        const dx = Sx-Mx;
        const dy = Sy-My;
        const signdx = Math.sign(dx);
        const signdy = Math.sign(dy);

        let angle = 0;

        if (dx == 0) {
          angle = Math.PI / 2;
        } else {
          angle = Math.atan(Math.abs(dy)/Math.abs(dx));
        }


        if (xcoord) {
          let axS = -signdx*totalAcceleration*Math.sin(angle);
          return axS;
        } else {
          let ayS = -signdy*totalAcceleration*Math.cos(angle);
          return ayS;
        }

      }

    }

    function draw() {

      xM += vxM;
      yM += vyM;

      xS += vxS;
      yS += vyS;

      axM = gravityAcceleration(xM,yM,xS,yS,0,0);
      ayM = gravityAcceleration(xM,yM,xS,yS,0,1);
      axS = gravityAcceleration(xM,yM,xS,yS,1,0);
      ayS = 10;

      vxM += axM;
      vyM += ayM;

      vxS += axS;
      vyS += ayS;

    }



console.log('moon x')
console.log(gravityAcceleration(xM,yM,xS,yS,true,true))
console.log('moon y')
console.log(gravityAcceleration(xM,yM,xS,yS,true,false))
console.log('sun x')
console.log(gravityAcceleration(xM,yM,xS,yS,false,true))
console.log('sun y')
console.log(gravityAcceleration(xM,yM,xS,yS,false,false))
