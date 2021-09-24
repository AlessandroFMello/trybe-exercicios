const api = require('./exercicio06')

describe("Testa a requisição", () => {
  const apiURL = jest.spyOn( api, "fetchedUrl");
  afterEach(apiURL.mockReset);

  it("Testa a requisição caso a promise seja resolvida", async () => {
    apiURL.mockResolvedValue('request success');

    apiURL();
    expect(apiURL).toHaveBeenCalled();
    expect(apiURL).toHaveBeenCalledTimes(1);
    expect(apiURL()).resolves.toBe('request success');
    expect(apiURL).toHaveBeenCalledTimes(2);
  });

  it("Testa requisição caso a promise seja rejeitada", async () => {
    apiURL.mockRejectedValue('request failed');

    expect(apiURL).toHaveBeenCalledTimes(0);
    expect(apiURL()).rejects.toMatch('request failed');
    expect(apiURL).toHaveBeenCalledTimes(1);
  });
});
