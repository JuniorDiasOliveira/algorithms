// Use this file to write tests for the problem

import invertString from "./index";

describe("general test", () =>{
  it("should return true", () => {
    expect(true).toBe(true);
  });

  it("should return the hello word inverted", () => {
    const input = "hello";
    const expectedOutput = "olleh";
    expect(invertString(input)).toBe(expectedOutput);
  });


  it("should return the OpenAI inverted", () => {
    const input = "OpenAI";
    const expectedOutput = "IAnepO";
    expect(invertString(input)).toBe(expectedOutput);
  });



  it("should return the string inverted", () => {
    const input = "Invert this string!";
    const expectedOutput = "!gnirts siht trevnI";
    expect(invertString(input)).toBe(expectedOutput);
  });



  it("should return the special characters inverted", function () {
    const input = "I º ~ ç";
    const expectedOutput = "ç ~ º I";
    expect(invertString(input)).toBe(expectedOutput);
  });
});
