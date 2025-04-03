import { describe, it } from "mocha";
import { assert } from "chai";
import calcTax from "../tax-calc.js";

describe("Tax calculator test for integers", () => {
  it("should exempt income below 12_000", () => {
    assert.equal(calcTax(10_000), 0);
  });
});
