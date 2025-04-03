import { describe, it } from "mocha";
import { assert } from "chai";

describe("Tax calculator test for integers", () => {
  it("should calculate tax", () => {
    assert.equal(calcTax(10000), 0);
  });
});
