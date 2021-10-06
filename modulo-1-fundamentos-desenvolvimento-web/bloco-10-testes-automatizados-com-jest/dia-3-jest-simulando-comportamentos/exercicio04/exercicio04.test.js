const myFunctions = require('./exercicio04')
jest.mock('./exercicio04');

describe('Testa a função stringToUpperCase', () => {
  it('Testa se a função stringToUpperCase modificada retorna a string em caixa baixa', () => {
    myFunctions.stringToUpperCase.mockImplementation((string) => string.toLowerCase());
    myFunctions.stringToUpperCase('BOOKS');

    expect(myFunctions.stringToUpperCase).toHaveBeenCalled();
    expect(myFunctions.stringToUpperCase).toHaveBeenCalledTimes(1);
    expect(myFunctions.stringToUpperCase).toHaveBeenCalledWith('BOOKS')
    expect(myFunctions.stringToUpperCase('BOOKS')).toBe('books')
  });
});

describe('Testa a função getFisrtLetter', () => {
  it('Testa se a função getFisrtLetter modificada retorna a última letra da string', () => {
    myFunctions.getFisrtLetter.mockImplementation((string) => string.charAt(string.length - 1));
    myFunctions.getFisrtLetter('books');

    expect(myFunctions.getFisrtLetter).toHaveBeenCalled();
    expect(myFunctions.getFisrtLetter).toHaveBeenCalledTimes(1);
    expect(myFunctions.getFisrtLetter).toHaveBeenCalledWith('books');
    expect(myFunctions.getFisrtLetter('books')).toBe('s');
  });
});

describe('Testa a função concatString', () => {
  it('Testa se a função concatString modificada retorna três strings concatenadas', () => {
    myFunctions.concatString.mockImplementation((string1, string2, string3) => string1 + string2 + string3);
    myFunctions.concatString('Books', 'Notebooks', 'Papers');

    expect(myFunctions.concatString).toHaveBeenCalled();
    expect(myFunctions.concatString).toHaveBeenCalledTimes(1);
    expect(myFunctions.concatString).toHaveBeenCalledWith('Books', 'Notebooks', 'Papers');
    expect(myFunctions.concatString('Books', 'Notebooks', 'Papers')).toBe('BooksNotebooksPapers');
  });
});
