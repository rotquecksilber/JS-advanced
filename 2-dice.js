function isValidFaces(faces) {
  const parsedFaces = parseInt(faces, 10);
  return (
    isFinite(parsedFaces) &&
    parsedFaces >= 4 &&
    parsedFaces <= 20 &&
    parsedFaces % 2 === 0 &&
    parsedFaces !== 14 &&
    parsedFaces !== 18
  );
}

function throwDice(dice) {
  const trimmedDice = dice.trim();
  if (!trimmedDice.startsWith('d')) {
    return null;
  }

  const faces = trimmedDice.slice(1);
  if (!isValidFaces(faces)) {
    return null;
  }

  const parsedFaces = parseInt(faces, 10);
  return Math.floor(Math.random() * parsedFaces + 1);
}

//test
console.log(throwDice('d12'));
console.log(throwDice(' d12 '));

console.log(throwDice('d18'));
console.log(throwDice('d14'));
console.log(throwDice('d13'));
console.log(throwDice('d2'));
console.log(throwDice('d22'));
console.log(throwDice(' de12 '));

