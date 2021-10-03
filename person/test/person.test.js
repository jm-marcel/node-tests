const person = require("../lib/person");
const email = require("../lib/email");
const personDAO = require("../lib/personDAO");

describe("Person", () => {
  // Nome
  test("Should report an invalid name", () => {
    expect(() =>
      personDAO(new person(1, "Nome123", 50, new email(1, "email@email.com")))
    ).toThrow("Insira apenas letras no campo com o seu nome!");
  });
  // Idade
  test("Should report an invalid age", () => {
    expect(() =>
      personDAO(new person(1, "Nome", 500, new email(1, "email@email.com")))
    ).toThrow("Insira uma idade válida!");
  });
  // Email Inexistente
  test("Should report an inexistent email", () => {
    expect(() => personDAO(new person(1, "Nome", 50, null))).toThrow(
      "Você deve possuir ao menos um email vinculado!"
    );
  });
  // Email Inválido
  test("Should report an invalid email", () => {
    expect(() =>
      personDAO(new person(1, "Nome", 50, new email(1, "Email")))
    ).toThrow("Insira um email válido!");
  });
});
