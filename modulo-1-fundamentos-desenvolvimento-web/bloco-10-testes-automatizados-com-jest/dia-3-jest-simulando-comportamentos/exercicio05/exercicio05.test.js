const myFunctions = require('./exercicio05')
jest.mock('./exercicio05');

describe('Testa a função stringToUpperCase.', () => {
  it('Testa se a função stringToUpperCase modificada retorna uma string em caixa baixa.', () => {
    myFunctions.stringToUpperCase.mockImplementation((string) => string.toLowerCase());
    myFunctions.stringToUpperCase('BoOkS');

    expect(myFunctions.stringToUpperCase).toHaveBeenCalled();
    expect(myFunctions.stringToUpperCase).toHaveBeenCalledTimes(1);
    expect(myFunctions.stringToUpperCase).toHaveBeenCalledWith('BoOkS');
    expect(myFunctions.stringToUpperCase('BoOkS')).toBe('books')
    expect(myFunctions.stringToUpperCase).toHaveBeenCalledTimes(2);
  });

  it('Testa se a função stringToUpperCase restaurada retorna uma string em caixa alta', () => {
    myFunctions.stringToUpperCase.mockImplementation((string) => string.toUpperCase());
    myFunctions.stringToUpperCase('BoOkS');

    expect(myFunctions.stringToUpperCase).toHaveBeenCalled();
    expect(myFunctions.stringToUpperCase).toHaveBeenCalledTimes(3);
    expect(myFunctions.stringToUpperCase).toHaveBeenCalledWith('BoOkS');
    expect(myFunctions.stringToUpperCase('BoOkS')).toBe('BOOKS');
    expect(myFunctions.stringToUpperCase).toHaveBeenCalledTimes(4);
  });
});