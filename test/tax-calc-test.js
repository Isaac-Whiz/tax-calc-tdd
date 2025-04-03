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
  it("should charge 40% for income from 36_001 and beyond", () => {
    assert.equal(calcTax(36_001), 14_400.4);
  });
});

describe("Tax calculator test for floating point numbers", () => {
  it("should exempt income below 12_000", () => {
    assert.equal(calcTax(10_000.5), 0);
  });
  it("should charge 20% for 36_500.88", () => {
    assert.equal(calcTax(16_500.88), 3_300.18);
  });
});

describe("Tax calculator test for negative numbers", () => {
  it("should exempt income below 12_000", () => {
    assert.equal(calcTax(-10_000), 0);
  });
  it("should charge exempt negative income", () => {
    assert.equal(calcTax(-36_000_000), 0);
  });
});
