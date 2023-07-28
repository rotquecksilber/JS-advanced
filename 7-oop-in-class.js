'use strict';

class Character {
	#race;
	#name;
	#language;
	constructor(race, name, language) {
	this.#race = race;
	this.#name = name;
	this.#language = language;
	}

	speak() {
		console.log(`My name is ${this.name} and I speak ${this.#language}.`);
		return this;
	}

	get race() {
		return this.#race;
	}

	get name() {
		return this.#name;
	}
}

class Orc extends Character {
	#weapon = 'Doomhammer';
	constructor(name) {
	super('Orc', name, 'Orkish');
	}

	attack() {
		console.log(`${this.race} ${this.name} atacked with a ${this.#weapon}.`);
		return this;
	}
}

class Elf extends Character {
	#typeOfSpell = 'Storm';
	constructor(name) {
	super('Elf', name, 'Elvish');
	}

	attack() {
		console.log(`${this.race} ${this.name} atacked with a ${this.#typeOfSpell} spell.`);
		return this;
	}
} 


const orc = new Orc('Thral');
console.log(orc);
orc.speak().attack();

const elf = new Elf('Malfurion');
console.log(elf);
elf.speak().attack();