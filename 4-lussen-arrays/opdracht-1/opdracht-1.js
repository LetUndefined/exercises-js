let getallen = [1, 2, 3, 4, 5];

function vermenigvuldig() {
  let newArray = [];
  for (let i = 0; i < getallen.length; i++) {
    newArray.push(getallen[i] * 2);
  }
  getallen = newArray;
  return getallen;
}

vermenigvuldig();
console.log(getallen);
