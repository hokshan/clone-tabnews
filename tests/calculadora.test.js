const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("somar 5 + 100 deria retornar 105", () => {
  const resultado = calculadora.somar(5, 100);
  expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deria retornar 105", () => {
  const resultado = calculadora.somar("banana", 100);
  expect(resultado).toBe("Erro");
});
// test("nome do teste", callbackFunction);

// function callbackFunction() {
//   console.log("ta funcionando?");
// }

// test("nome do teste", function () {
//   console.log("assim tbm funfa");
// });

// test("nome do teste", () => {
//   console.log("assim é o mais usado");
// });

// test("espero que 1 seja 1 kk", () => {
//   expect(1).toBe(1);
// });
