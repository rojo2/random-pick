import { expect } from "chai";
import randomPick from "../src/random-pick"

describe("Random Pick", () => {

  it("should return values from an array", () => {
   
    const listOfNumbers = [25,42,667,69];
    for (let i = 0; i < 100; i++) {
      expect(randomPick(listOfNumbers))
        .to.be.oneOf(listOfNumbers);
    }

  });

  it("should return `undefined` from an empty array", () => {
   
    const emptyList = [];
    for (let i = 0; i < 100; i++) {
      expect(randomPick(emptyList))
        .to.be.undefined;
    }

  });
});
