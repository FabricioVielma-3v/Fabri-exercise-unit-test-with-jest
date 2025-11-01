const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    
    let total = sum(14, 9);

    
    expect(total).toBe(23);
});


const {
  oneEuroIs,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
} = require("./app.js");

describe("currency converters", () => {
  test("1 EUR -> USD", () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07, 5);
  });

  test("1 USD -> JPY", () => {
    const expected = (1 / oneEuroIs.USD) * oneEuroIs.JPY;
    expect(fromDollarToYen(1)).toBeCloseTo(expected, 5);
  });

  test("156.5 JPY -> GBP", () => {
    const expected = (156.5 / oneEuroIs.JPY) * oneEuroIs.GBP; // = 0.87
    expect(fromYenToPound(156.5)).toBeCloseTo(expected, 5);
  });
});