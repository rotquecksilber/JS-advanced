'use strict';

/* Создание Персонажа */
const Character = function(race, name, language) {
	this.race = race;
	this.name = name;
	this.language = language;
};

Character.prototype.speaks = function() {
	console.log(`My name is ${this.name} and I speak ${this.language}.`);
};

/* Создание Орка, наследуемого от персонажа */
const Orc = function(name) {
	Character.call(this, 'Orc', name, 'Orkish');
	this.weapon = 'Doomhammer';
}


Orc.prototype = Object.create(Character.prototype);
Orc.prototype.constructor = Orc;

Orc.prototype.atacks = function () {
	console.log(`${this.race} ${this.name} atacked with a ${this.weapon}.`)
}

/* Создание Эльфа, наследуемого от персонажа */

const Elf = function(name) {
	Character.call(this, 'Elf', name, 'Elvish');
	this.typeOfSpell = 'Storm';
}


Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.atacks = function () {
	console.log(`${this.race} ${this.name} atacked with a ${this.typeOfSpell} spell.`)
}

/* Тест */
const orc1 = new Orc('Thrall');
console.log(orc1);
orc1.speaks();
orc1.atacks();


const elf1 = new Elf('Malfurion')
console.log(elf1);
elf1.speaks();
elf1.atacks();