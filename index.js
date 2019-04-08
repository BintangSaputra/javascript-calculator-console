const digitA = 10000000;
const digitB = 20000;

const resultAddition = digitA + digitB;
const resultSubstraction = digitA - digitB;
const resultMultiplication = digitA * digitB;
const resultDivision = digitA / digitB;

console.log(resultAddition);

console.log(resultSubstraction);

console.log(resultMultiplication);

console.log(resultDivision);

if (resultAddition > resultSubstraction) {
  console.log("you are correct!");
} else if (resultAddition < resultSubstraction) {
  console.log("do not know");
} else {
  ("still do not know");
}
