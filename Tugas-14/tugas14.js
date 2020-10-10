const Balok = (...angka) => {
  let sum = 1;
  for (let x of angka) sum = sum * x;
  return sum;
};

const Kubus = (...angka) => {
  let sum = 1;
  for (let x of angka) sum = sum * x;
  return sum;
};

console.log(`Balok = ${Balok(3, 4, 5)}`);
console.log(`Kubus = ${Kubus(4, 4, 4)}`);
