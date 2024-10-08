function telOp(getallen) {
  let counter = 0;
  for (let i = 0; i < getallen.length; i++) {
    counter += getallen[i];
  }
  console.log(counter);
}

telOp([5, 10, 15]);
