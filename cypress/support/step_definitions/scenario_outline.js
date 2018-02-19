const { when, then } = require("cypress-cucumber-preprocessor"); // eslint-disable-line

// you can have external state, and also require things!
let sum = 0;

when("I add {int} and {int}", (a, b) => {
  sum = a + b;
});

then("I verify that the result is equal the {string}", result => {
  expect(sum).to.equal(result);
});
