// features/step_definitions/EsPar.steps.js

const { Given, Then, When } = require("@cucumber/cucumber");
const assert = require("assert");

const esPar = (number) => number % 2 === 0 ? "Par" : "Impar";

Given("El numero {string}", function (valores) {
  this.numero = Number(valores);
});

When("Lo divido entre 2", function () {
  division = esPar(this.numero);
});

Then("Me tiene que dar {string}", function (resultadoEsperado) {
  assert.equal(division, resultadoEsperado);
});
