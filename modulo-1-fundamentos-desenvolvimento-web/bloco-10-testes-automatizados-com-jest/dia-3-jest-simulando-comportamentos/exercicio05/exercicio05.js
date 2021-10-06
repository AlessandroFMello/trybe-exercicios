// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
// Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const stringToUpperCase = (string) => {
  return string.toUpperCase();
};

const getFisrtLetter = (string) => {
  return string[0];
}

const concatString = (string1, string2) => {
  const concat = string1 + string2;
  return concat;
}

module.exports = {
  stringToUpperCase,
  getFisrtLetter,
  concatString,
}