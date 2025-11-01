
const sum = (a, b) => a + b;

const oneEuroIs = { JPY: 156.5, USD: 1.07, GBP: 0.87 };

function fromEuroToDollar(euro) {
  return euro * oneEuroIs.USD;
}

function fromDollarToYen(dollar) {
  return (dollar / oneEuroIs.USD) * oneEuroIs.JPY;
}

function fromYenToPound(yen) {
  return (yen / oneEuroIs.JPY) * oneEuroIs.GBP;
}


module.exports = { sum, oneEuroIs, fromEuroToDollar, fromDollarToYen, fromYenToPound };


  console.log(sum(7, 3));