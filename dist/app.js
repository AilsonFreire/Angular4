"use strict";
exports.__esModule = true;
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
/*
Trabalhando com Módulos
(export e import de variáveis, funções, classes, interfaces...)
*/
var starfighters_1 = require("./starfighters");
/*
  Trabalhando com importar bibliotecas do javascript: npm install --save
  lodash@4.14
  definição de tipos npm install --save-dev @types/lodash
*/
//Importando todas as definições de lodash
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 21, "*"));
var xWing = new starfighters_1.MilleniumFalcon();
xWing.showQntContainers();
xWing.testGoInToHyperspace();
