"use strict";
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
exports.__esModule = true;
var base_ship_1 = require("./base-ship");
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = 
        /*
        Se  se deseja usar a propriedade (argumento) herdada,
        usa-se super(propriedade) para chamar a propriedade
        */
        _super.call(this, "protóns") || this;
        _this.cargoContainers = 5;
        return _this;
    }
    MilleniumFalcon.prototype.showQntContainers = function () {
        console.log("This spaceship contain a total of " + this.cargoContainers + " containers");
    };
    MilleniumFalcon.prototype.testGoInToHyperspace = function () {
        if (Math.random() >= 0.5) {
            /*
            Se se deseja chamar o método herdado,
            usa-se super.nomeDoMetodod
             */
            _super.prototype.jumpintoHyperspace.call(this);
        }
    };
    return MilleniumFalcon;
}(base_ship_1.Spacecraft));
exports.MilleniumFalcon = MilleniumFalcon;
