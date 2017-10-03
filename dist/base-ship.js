"use strict";
exports.__esModule = true;
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
exports.Spacecraft = Spacecraft;
