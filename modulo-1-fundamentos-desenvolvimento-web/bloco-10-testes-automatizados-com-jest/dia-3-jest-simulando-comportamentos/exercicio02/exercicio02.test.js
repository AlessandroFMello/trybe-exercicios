const randomNumber = require('./exercicio02')
jest.mock('./exercicio02');

describe('Testa a função generateRandomNumber', () => {
  it('Testa se a função generateRandomNumber modificada retorna a divisão dos dois parâmetros adicionados', () => {
    randomNumber.generateRandomNumber.mockImplementation((a, b) => a / b);
    randomNumber.generateRandomNumber(10, 5);

    expect(randomNumber.generateRandomNumber).toHaveBeenCalled();
    expect(randomNumber.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber.generateRandomNumber).toHaveBeenCalledWith(10, 5);
    expect(randomNumber.generateRandomNumber(10, 5)).toBe(2);
    expect(randomNumber.generateRandomNumber(5, 5)).toBe(1);
  });
});