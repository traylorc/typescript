"use strict";
var Pets = /** @class */ (function () {
    function Pets(name, breed, color, age) {
        this.name = name;
        this.breed = breed;
        this.color = color;
        this.age = age;
    }
    Pets.prototype.print = function () {
        console.log(this.name, this.breed, this.color, this.age);
    };
    return Pets;
}());
var Mia = new Pets("Mia", "pitbull", "brown", 3);
var Lucy = new Pets("Lucy", "basset", "white", 1);
var Eevee = new Pets("Eevee", "cat", "brown", 9);
var animals = [
    Mia, Lucy, Eevee
];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var pet = animals_1[_i];
    pet.print();
}
