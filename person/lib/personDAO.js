module.exports = (pessoa) => {
  // Nome
  if (!/^[a-zA-Z]+$/.test(pessoa.name)) {
    throw "Insira apenas letras no campo com o seu nome!";
  }

  // Idade
  if (pessoa.age < 1 || pessoa.age > 200) {
    throw "Insira uma idade válida!";
  }

  // E-Mail
  const regexEmailValidation = /\S+@\S+\.\S+/;

  // Email Inexistente
  if (!pessoa.email) {
    throw "Você deve possuir ao menos um email vinculado!";
  }

  // Email Inválido
  if (!regexEmailValidation.test(pessoa.email.name)) {
    throw "Insira um email válido!";
  }
};
