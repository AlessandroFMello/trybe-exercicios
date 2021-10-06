// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação,
// que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 
// Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
const generateRandomNumber = () => {
  const randomNumber = Math.random();
  return Math.round(randomNumber * 100);
}

module.exports = { generateRandomNumber };
