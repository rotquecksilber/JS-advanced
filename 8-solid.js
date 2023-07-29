'use strict';

class Billing {
	#amount = 100;
	#strategy;

  	constructor(strategy) {
		this.#strategy = strategy;
  	}

  	get amount() {
    	return this.#amount;
  	}

  	calculateTotal() {
    	return this.#strategy.calculateTotal(this.amount);
  	}
}

class FixBillingStrategy {
	calculateTotal(amount) {
    	return amount;
  	}
}

class HourBillingStrategy {
  	constructor(hours) {
    	this.hours = hours;
  	}

  	calculateTotal(amount) {
    	return amount * this.hours;
  	}
}

class ItemBillingStrategy {
 	constructor(items) {
    	this.items = items;
  	}

  	calculateTotal(amount) {
    	return amount * this.items;
  	}
}

const fixBilling = new Billing(new FixBillingStrategy());
console.log(fixBilling.calculateTotal());
const hourBilling = new Billing(new HourBillingStrategy(5));
console.log(hourBilling.calculateTotal());
const itemBilling = new Billing(new ItemBillingStrategy(10));
console.log(itemBilling.calculateTotal());





