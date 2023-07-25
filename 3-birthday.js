'use strict';
/* Вариант 1 */
function validateAge (birthday) {
	const today = new Date();
	const usersBirthday = new Date(birthday);

	if((today.getTime() - usersBirthday.getTime()) / stampYears < 14) {
		return false
	}

	return true;
}

const birthday = '2009-07-17';
const stampYears = 1000 * 60 * 60 * 24 * 365;
console.log(validateAge(birthday))


/* Вариант 2 */
function validateAge1(birthday) {
	const age14 = 14;

	const today = new Date();
	const usersBirthday = new Date(birthday);

	const ageDiff = today.getFullYear() - usersBirthday.getFullYear();
	const hasHadBirthdayThisYear =
    	today.getMonth() > usersBirthday.getMonth() ||
    	(today.getMonth() === usersBirthday.getMonth() &&
      	today.getDate() >= usersBirthday.getDate());

	const age = hasHadBirthdayThisYear ? ageDiff : ageDiff - 1;

	return age >= age14;
}

const birthday1 = '2009-07-17';
console.log(validateAge1(birthday1));