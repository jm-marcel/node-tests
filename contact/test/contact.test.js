const contact = require("../lib/contact");
const contactDAO = require("../lib/contactDAO");

describe("Contact", () => {
  // E-Mail
  test("Should report an invalid email", () => {
    expect(() =>
      contactDAO(new contact(null, "Senha", "(00) 000-000", "Nome", 50, 100))
    ).toThrow("Insira um email válido!");
  });
  // Password
  test("Should report an invalid password", () => {
    expect(() =>
      contactDAO(new contact("Email", null, "(00) 000-000", "Nome", 50, 100))
    ).toThrow("Insira uma senha válida!");
  });
  // Name
  test("Should report an invalid name", () => {
    expect(() =>
      contactDAO(new contact("Email", "Senha", "(00) 000-000", null, 50, 100))
    ).toThrow("Insira um nome válido!");
  });
  // Age
  test("Should report an invalid age", () => {
    expect(() =>
      contactDAO(
        new contact("Email", "Senha", "(00) 000-000", "Nome", 100, 100)
      )
    ).toThrow("Insira uma idade válida!");
  });
  // Weight
  test("Should report an invalid weight", () => {
    expect(() =>
      contactDAO(new contact("Email", "Senha", "(00) 000-000", "Nome", 50, 500))
    ).toThrow("Insira um peso válido!");
  });
});
