import { flatten } from './utility';

describe('utility functions', () => {
  it("should return the element's itself if it's not an array", () => {
    const argument = 'Totally not an array';
    expect(flatten(argument)).toEqual(argument);
  });

  it('should flatten a deeply nested array', () => {
    const nestedArray = [[[{ isNestedEnough: true }]]];
    const expectedResult = [{ isNestedEnough: true }];
    expect(flatten(nestedArray)).toEqual(expectedResult);
  });
});
