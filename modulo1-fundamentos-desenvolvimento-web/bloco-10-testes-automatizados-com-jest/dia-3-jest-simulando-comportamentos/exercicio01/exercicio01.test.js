const randomNumber = require('./exercicio01');

describe('Testa a função generateRandomNumber', () => {
  it('Testa se a função "generateRandomNumber" retorna o 10', () => {
    randomNumber.generateRandomNumber = jest
      .fn()
      .mockReturnValueOnce(10);
    expect(randomNumber.generateRandomNumber()).toEqual(10);
    expect(randomNumber.generateRandomNumber).toHaveBeenCalledTimes(1);
  });
});
