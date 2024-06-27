// Use this file to write tests for the problem

import invertString  from "./index";

describe("invertString tests for LOOP",  () => {
  it("should return a basic inverts string",  () => {
    expect(invertString("hello")).toBe("olleh");
  });
  it('should return a inverts string with special characters', () => {
    expect(invertString('hello!')).toBe('!olleh');
  });

  it('should return a inverts string with spaces', () => {
    expect(invertString('invert this string')).toBe('gnirts siht trevni');
  });

  it('should throws an error for non-string input', () => {
    expect(() => invertString(12345)).toThrow('myString is not a string');
  });
});
