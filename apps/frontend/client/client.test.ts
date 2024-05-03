import { getRequests } from "./client";

// Manually mocking the fetch here because given two hours it would
// probably not be a good idea to set up more involved mocking.
// Besides, this is pretty nostalgic, I haven't done this in a while.

describe('The API client getRequests function', () => {

  const realFetch = global.fetch;
  afterEach(() => {
    global.fetch = realFetch;
  })

  describe('If mocked status code is in the OK range', () => {
    it('function should return the expected mock data', async () => {
      //arrange
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve({test: '123'}),
        }),
      ) as jest.Mock;

      //act
      const res = await getRequests();

      //assert
      expect(res).toEqual({test: '123'});
    });
  });

  describe('If mocked status code is not in the OK range', () => {
    it('underlying fetch should throw, function should return null', async () => {
      //arrange
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
        }),
      ) as jest.Mock;

      //act
      const res = await getRequests();

      //assert
      expect(res).toBeNull();
    });
  });
});