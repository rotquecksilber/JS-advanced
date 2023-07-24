'use strict';

let arrayObj = [
	{id: 1, name: 'Вася'},
	{id: 2, name: 'Петя'},
	{id: 1, name: 'Вася'},
];

const uniqueObjects =
[...new Set(arrayObj.map((obj) => obj.id))].map((id) => arrayObj.find((obj) => obj.id === id));
console.log(uniqueObjects);

