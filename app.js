'use strict';

function getUniqueObjects(array) {
  const uniqIds = [...new Set(array.map((obj) => obj.id))];
  const uniqObjects = uniqIds.map((id) => array.find((obj) => obj.id === id));
  return uniqObjects;
}

const arrayObj = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 1, name: 'Вася' },
];

const uniqArray = getUniqueObjects(arrayObj);
console.log(uniqArray);

