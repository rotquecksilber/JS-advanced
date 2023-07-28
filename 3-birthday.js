'use strict';
/* Вариант 1 */
function validateAge (birthday) {
	const today = new Date();
	const usersBirthday = new Date(birthday);

const age = (today.getTime() - usersBirthday.getTime()) / stampYears;
return age >= 14;
}

const birthday = '2009-07-17';
const stampYears = 1000 * 60 * 60 * 24 * 365;
console.log(validateAge(birthday))


/* Вариант 2 */
function validateAge(birthday, validAge = 14) {

	const today = new Date();
	const usersBirthday = new Date(birthday);

	const ageDiff = today.getFullYear() - usersBirthday.getFullYear();
	const isBirthdayThisYearPassed =
    	today.getMonth() > usersBirthday.getMonth() ||
    	(today.getMonth() === usersBirthday.getMonth() &&
      	today.getDate() >= usersBirthday.getDate());

	const age = isBirthdayThisYearPassed ? ageDiff : ageDiff - 1;

	return age >= validAge;
}

const birthday1 = '2009-07-17';
console.log(validateAge(birthday1));