var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Help me Obi-wan Kenobi. You're my only hope";
console.log(message);
var episode = 4;
console.log("This is espisode " + 4);
episode += 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = "BB8";
var shortestRun = function (parsecs) {
    return parsecs < 21;
};
console.log(shortestRun(9));
var isEnoughtToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enought to beat Millenium Falcon? " + (isEnoughtToBeatMF(distance) ? 'YES' : 'NO'));
var call = function (name) { return console.log("DO  you copy, " + name); };
call("R2");
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc(5,1) = " + inc(5, 1));
console.log("inc(5) = " + inc(5));
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propoulsor) {
        this.propulsor = propoulsor;
    }
    //Métodos não precisam da palavra function
    Spacecraft.prototype.jumpintoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var falcon = new Spacecraft("hyperdrive");
falcon.jumpintoHyperspace();
//Declarar propriedade (atributo) dentro do método
var MilleniumFalcon = /** @class */ (function () {
    function MilleniumFalcon(propulsor) {
        this.propulsor = propulsor;
        console.log("Entering hyperspace wiht " + this.propulsor);
    }
    return MilleniumFalcon;
}());
var xwing = new MilleniumFalcon("plasma");
var tiFi = /** @class */ (function (_super) {
    __extends(tiFi, _super);
    /*Método constructor que vai receber os valores passados pelo objeto
      e salva-los dentro da propriedade (atributo) da classe
    */
    function tiFi() {
        var _this = _super.call(this, "protóns") || this;
        _this.cargoContainer = 4;
        return _this;
    }
    tiFi.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            console.log(true);
            _super.prototype.jumpintoHyperspace.call(this);
        }
        else
            console.log(false);
    };
    return tiFi;
}(Spacecraft));
var spaceship = new tiFi();
spaceship.jumpIntoHyperspace();
function goodForTheJob(ship) {
    return ship.cargoContainer > 2;
}
console.log(goodForTheJob(spaceship));
