const randomNumber = require('./exercicio03.js')
jest.mock('./exercicio03.js')

describe('Testa a função generateRandomNumber', () => {
  it('', () => {
    randomNumber.generateRandomNumber.mockImplementation((a, b, c) => a * b * c);
    randomNumber.generateRandomNumber(2, 2, 2);

    expect(randomNumber.generateRandomNumber).toHaveBeenCalled();
    expect(randomNumber.generateRandomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber.generateRandomNumber).toHaveBeenCalledWith(2, 2, 2);
    expect(randomNumber.generateRandomNumber(2, 2, 2)).toBe(8);
    expect(randomNumber.generateRandomNumber(3, 3, 3)).toBe(27);
  });
});