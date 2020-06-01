const { findNeedle } = require('./haystack');

describe('findNeedle', () => {
  test('should find the needle at [2, 1]', () => {
    const haystack = [
      ['H', 'H', 'H'],
      ['H', 'H', 'H'],
      ['H', 'N', 'H'],
    ];
    expect(findNeedle(haystack)).toEqual(expect.arrayContaining([2, 1]));
  });

  test('should find the needle at [0, 0]', () => {
    const haystack = [
      ['N', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H'],
    ];
    expect(findNeedle(haystack)).toEqual(expect.arrayContaining([0, 0]));
  });

  test('should find the needle at [1, 1]', () => {
    const haystack = [
      ['H', 'H', 'H', 'H', 'H'],
      ['H', 'N', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H'],
    ];
    expect(findNeedle(haystack)).toEqual(expect.arrayContaining([1, 1]));
  });

  test('should find the needle at [4, 3]', () => {
    const haystack = [
      ['H', 'H', 'H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'H', 'H', 'H', 'H'],
      ['H', 'H', 'H', 'N', 'H', 'H', 'H'],
    ];
    expect(findNeedle(haystack)).toEqual(expect.arrayContaining([4, 3]));
  });
});