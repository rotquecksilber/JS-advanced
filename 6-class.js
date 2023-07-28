'use strict';

class Car {
	#brand;
	#model;
	#mileage;

	constructor(brand, model, run) {
		this.#brand = brand;
		this.#model = model;
		this.#mileage = run;
	}

	get changeMileage() {
		return this.#mileage
	}

	set changeMileage(newMileage) {
		this.#mileage = newMileage;
	}

	info () {
		console.log(`Brand: ${this.#brand}, Model: ${this.#model}, Run: ${this.#mileage}`)
	}
}

const car = new Car('Tesla','X','10500');
car.changeMileage = '17000';
console.log(car);
car.info();