import {Container, Spacecraft} from "./base-ship"

class MilleniumFalcon extends Spacecraft implements Container 
{
    cargoContainers : number
       
    constructor()
    {
        /*
        Se  se deseja usar a propriedade (argumento) herdada,
        usa-se super(propriedade) para chamar a propriedade
        */
        super("protóns")
        this.cargoContainers = 5;
    }

    showQntContainers()
    {
        console.log("This spaceship contain a total of " + this.cargoContainers + " containers")
    }

    testGoInToHyperspace()
    {
        if(Math.random() >= 0.5)
        {
            /*
            Se se deseja chamar o método herdado,
            usa-se super.nomeDoMetodod 
             */
            super.jumpintoHyperspace()
        }
    }
}

export {MilleniumFalcon}
