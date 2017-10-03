//Trabalhando com Módulos e suas exportações ~ importação
//Interfaces
/* Se você botar ? na frente do argumento (parametro)
ele se tornará opcional no momento de sua implementação*/
interface Containership 
{
    cargoContainers : number
}

class Spacecraft
{
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

export {Containership as Container, Spacecraft}