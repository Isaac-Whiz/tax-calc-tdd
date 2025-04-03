import { describe, it } from "mocha";
import { assert } from "chai";
import calcTax from "../tax-calc.js";

describe("Tax calculator test for integers", () => {
  it("should exempt income below 12_000", () => {
    assert.equal(calcTax(10_000), 0);
  });
  it("should charge 20% for income in range 12_000 to 36_000", () => {
    assert.equal(calcTax(36_000), 7_200);
  });
});
