// Use this file to write tests for the problem

import invertString from "./index";

describe("invertString tests", function () {
  it("should return true", function () {
    expect(true).toBe(true);
  });
});

describe("invertString tests", function () {
  it("should return the string inverted", function () {
    const input = "hello";
    const expectedOutput = "olleh";
    expect(invertString(input)).toBe(expectedOutput);
  });
});

describe("invertString tests", function () {
  it("should return the string inverted", function () {
    const input = "OpenAI";
    const expectedOutput = "IAnepO";
    expect(invertString(input)).toBe(expectedOutput);
  });
});

describe("invertString tests", function () {
  it("should return the string inverted", function () {
    const input = "Invert this string!";
    const expectedOutput = "!gnirts siht trevnI";
    expect(invertString(input)).toBe(expectedOutput);
  });
});

describe("invertString tests", function () {
  it("should return the string inverted", function () {
    const input = "I º ~ ç";
    const expectedOutput = "ç ~ º I";
    expect(invertString(input)).toBe(expectedOutput);
  });
});
