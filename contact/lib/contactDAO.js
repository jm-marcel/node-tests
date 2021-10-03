module.exports = (contact) => {
  if (!contact.email) {
    throw "Insira um email válido!";
  }

  if (!contact.password) {
    throw "Insira uma senha válida!";
  }

  if (!contact.name) {
    throw "Insira um nome válido!";
  }

  if (
    !contact.age ||
    contact.age === 0 ||
    contact.age < 5 ||
    contact.age > 99
  ) {
    throw "Insira uma idade válida!";
  }

  if (
    !contact.weight ||
    contact.weight === 0 ||
    contact.weight < 1 ||
    contact.weight > 200
  ) {
    throw "Insira um peso válido!";
  }
};
