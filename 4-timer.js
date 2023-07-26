'use strict';

/* Не смог придумать, где использовать интернационализацию */
function timeUntilNewYear() {
	const today = new Date();
	const newYearDate = new Date(2024, 0, 1, 0);
	const diff = newYearDate.getTime() - today.getTime();

	let remainingTimeInMillis = diff;
	const months = Math.floor(remainingTimeInMillis / (1000 * 60 * 60 * 24 * 30));
	remainingTimeInMillis -= months * (1000 * 60 * 60 * 24 * 30);
	
	const days = Math.floor(remainingTimeInMillis / (1000 * 60 * 60 * 24));
	remainingTimeInMillis -= days * (1000 * 60 * 60 * 24);

	const hours = Math.floor(remainingTimeInMillis / (1000 * 60 * 60));
	remainingTimeInMillis -= hours * (1000 * 60 * 60);

	const minutes = Math.floor(remainingTimeInMillis / (1000 * 60));
	remainingTimeInMillis -= minutes * (1000 * 60);

	const seconds = Math.floor(remainingTimeInMillis / 1000);

	return {
    	months: months,
    	days: days,
    	hours: hours,
    	minutes: minutes,
    	seconds: seconds,
  };
}
	
function updateCountdown() {
	const remainingTime = timeUntilNewYear();
	document.getElementById('months').innerText = remainingTime.months;
    document.getElementById('days').innerText = remainingTime.days;
    document.getElementById('hours').innerText = remainingTime.hours;
    document.getElementById('minutes').innerText = remainingTime.minutes;
    document.getElementById('seconds').innerText = remainingTime.seconds;
}

setInterval(updateCountdown, 1000);