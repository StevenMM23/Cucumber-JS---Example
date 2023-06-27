const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let numero1, numero2, resultado;

Given('Tengo el número {int}', function (numero) {
  if (!numero1) {
    numero1 = numero;
  } else {
    numero2 = numero;
  }
});

When('Sumo los números', function () {
  resultado = numero1 + numero2;
});

When('Resto los números', function () {
  resultado = numero1 - numero2;
});

Then('El resultado es {int}', function (resultadoEsperado) {
  assert.equal(resultado, resultadoEsperado);
});