let message : string = "Help me Obi-wan Kenobi. You're my only hope";
console.log( message );

let episode : number = 4;
console.log( "This is espisode " + 4);
episode += 1;
console.log("Next episode is " + episode) ;

let favoriteDroid;

favoriteDroid = "BB8";

let shortestRun = function ( parsecs : number ) : boolean {
  return parsecs < 21;
}

console.log(shortestRun(9));

let isEnoughtToBeatMF = function ( parsecs : number ) : boolean {
    return parsecs < 12;
}

let distance = 14;
console.log(`Is ${distance} parsecs enought to beat Millenium Falcon? ${isEnoughtToBeatMF(distance) ? 'YES' : 'NO'}`);

let call = (name : string ) => console.log(`DO  you copy, ${name}`);
call (`R2`);

function inc (speed : number, inc : number = 1  ) : number {
  return speed + inc
}

console.log(`inc(5,1) = ${inc(5,1)}`)
console.log(`inc(5) = ${inc(5)}`)

class Spacecraft{

  propulsor : string

  constructor (propoulsor : string)
  {
    this.propulsor = propoulsor;
  }

  //Métodos não precisam da palavra function
  jumpintoHyperspace()
  {
    console.log("Entering hyperspace with " + this.propulsor)
  }
}
 

let falcon = new Spacecraft("hyperdrive") 

//Declarar propriedade (atributo) dentro do método
class MilleniumFalcon {

  constructor (public propulsor : string)
  {
    console.log("Entering hyperspace wiht " + this.propulsor)
  }
}

let xwing = new MilleniumFalcon("plasma")